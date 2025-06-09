import React, { useState } from 'react';
import type { FormEvent } from 'react';
import '../styles/assessment.css';

interface Question {
  id: string;
  type: 'radio' | 'checkbox' | 'textarea' | 'percentage_grid' | 'text' | 'select';
  question: string;
  options?: string[];
  placeholder?: string;
  hasOther?: boolean;
  percentageOptions?: string[];
}

interface Section {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  description?: string;
  questions: Question[];
}

interface AssessmentProps {
  sections: Section[];
  assessmentId?: string;
  token?: string;
}

export default function Assessment2({ sections, assessmentId, token }: AssessmentProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otherValue, setOtherValue] = useState('');
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  const totalQuestions = sections.reduce((total, section) => total + section.questions.length, 0);
  const currentQuestionNumber = sections
    .slice(0, currentSection)
    .reduce((total, section) => total + section.questions.length, 0) + currentQuestion + 1;

  const section = sections[currentSection];
  const question = section?.questions[currentQuestion];

  const handleAnswer = (value: any) => {
    setAnswers(prev => ({
      ...prev,
      [question.id]: value
    }));

    // Auto-advance for radio buttons if not the last question and not a question with "Other" option
    const isLastQuestion = currentSection === sections.length - 1 && 
                         currentQuestion === section.questions.length - 1;
    
    if (question.type === 'radio' && !isLastQuestion && !question.hasOther) {
      handleNext();
    }
  };

  const handleOtherInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtherValue(e.target.value);
    
    if (question.type === 'checkbox') {
      const currentAnswers = answers[question.id] || [];
      // If "Other" is already in the answers, update its value
      if (currentAnswers.some((a: string) => a.startsWith('Other:'))) {
        const newAnswers = currentAnswers.map((a: string) => 
          a.startsWith('Other:') ? `Other: ${e.target.value}` : a
        );
        setAnswers(prev => ({
          ...prev,
          [question.id]: newAnswers
        }));
      }
    }
  };

  // Function to save progress
  const saveProgress = async () => {
    try {
      setSaveStatus('Saving progress...');
      
      // Get the current question ID for resuming later
      const currentQuestionId = await getQuestionId(question.id);
      
      // Get user email from session storage
      const userData = JSON.parse(sessionStorage.getItem('assessmentUserData') || '{}');
      const userEmail = userData.email;

      console.log("Saving progress with:", {
        assessmentId,
        token,
        answers,
        questionId: currentQuestionId,
        userEmail
      });

      // Save progress to the server
      const response = await fetch('/api/save-assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          assessmentId,
          token,
          answers,
          questionId: currentQuestionId,
          userEmail
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        console.warn('Non-OK response from save-assessment:', data);
        // Even if we got a non-OK response, if data was saved successfully, show success message
        if (data.success) {
          setSaveStatus('Progress saved! You can resume later.');
          setTimeout(() => setSaveStatus(null), 3000);
          return data.resumeUrl;
        } else {
          throw new Error(data.error || 'Failed to save progress');
        }
      }
      
      // Show save status message
      setSaveStatus('Progress saved! You can resume later.');
      setTimeout(() => setSaveStatus(null), 3000);
      
      // Return the resume URL
      return data.resumeUrl;
    } catch (error) {
      console.error('Error saving progress:', error);
      
      // Check if the error is a network error, which might happen but data could still be saved
      if (error instanceof TypeError && error.message.includes('fetch failed')) {
        setSaveStatus('Progress may have been saved. Continue with your assessment.');
      } else {
        setSaveStatus('Failed to save progress. Please try again later.');
      }
      
      setTimeout(() => setSaveStatus(null), 3000);
      return null;
    }
  };

  // Helper function to get question ID from question key
  const getQuestionId = async (questionKey: string): Promise<string> => {
    try {
      const response = await fetch('/api/get-question-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ questionKey }),
      });

      if (!response.ok) {
        throw new Error('Failed to get question ID');
      }

      const data = await response.json();
      return data.id;
    } catch (error) {
      console.error('Error getting question ID:', error);
      return '';
    }
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      // Get the stored user data
      const userData = JSON.parse(sessionStorage.getItem('assessmentUserData') || '{}');
      
      // Send to Zapier webhook
      try {
        const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/4197949/2pws7oe/';
        
        // Create questions and responses arrays
        const questions: string[] = [];
        const responses: (string | number)[] = [];

        // Format the answers
        sections.forEach(section => {
          section.questions.forEach(question => {
            questions.push(question.question);
            
            let response = answers[question.id];
            
            // Format array responses as comma-separated string
            if (Array.isArray(response)) {
              response = response.join(', ');
            }
            // Format percentage grid responses
            else if (typeof response === 'object' && response !== null) {
              response = Object.entries(response)
                .map(([key, value]) => `${key}: ${value}%`)
                .join(', ');
            }
            
            responses.push(response || '');
          });
        });

        // Create the final data structure
        const fullData = {
          data: {
            questions,
            responses,
            userData
          },
          submittedAt: new Date().toISOString()
        };

        await fetch(zapierWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(fullData),
          mode: 'no-cors'
        });
      } catch (zapierError) {
        console.error('Error sending to Zapier:', zapierError);
        // Continue with database submission even if Zapier fails
      }

      // Submit to our API endpoint
      const response = await fetch('/api/submit-assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userData,
          answers,
          assessmentId,
          token
        }),
      });

      const responseData = await response.json();
      
      if (!responseData.success) {
        throw new Error(responseData.error || 'Failed to submit assessment');
      }

      // Redirect to thank you page
      window.location.href = '/assessment/thank-you';
    } catch (error) {
      console.error('Error submitting assessment:', error);
      setIsSubmitting(false);
      alert(`Error submitting assessment: ${error.message}`);
    }
  };

  const handleNext = () => {
    // For percentage grid questions, validate total equals 100%
    if (question.type === 'percentage_grid') {
      const values = answers[question.id] || {};
      const total = Object.values(values).reduce((sum: number, value: any) => sum + (Number(value) || 0), 0);
      if (total !== 100) {
        return; // Don't proceed if total isn't 100%
      }
    }

    if (currentQuestion < section.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else if (currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1);
      setCurrentQuestion(0);
    } else {
      handleSubmit();
    }

    // Save progress every 5 questions
    if (currentQuestionNumber % 5 === 0) {
      saveProgress();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    } else if (currentSection > 0) {
      setCurrentSection(prev => prev - 1);
      setCurrentQuestion(sections[currentSection - 1].questions.length - 1);
    }
  };

  const renderPercentageGrid = () => {
    if (!question.percentageOptions) return null;
    
    const currentValues = answers[question.id] || {};
    const total = Object.values(currentValues).reduce((sum: number, value: any) => sum + (Number(value) || 0), 0);
    const isValid = total === 100;
    
    return (
      <div className="percentage-grid">
        {question.percentageOptions.map(option => (
          <div key={option} className="percentage-row">
            <label className="percentage-label">{option}</label>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={currentValues[option] || 0}
              onChange={(e) => {
                const newValue = Number(e.target.value);
                const updatedValues = {
                  ...currentValues,
                  [option]: newValue
                };
                handleAnswer(updatedValues);
              }}
              className="percentage-slider"
            />
            <span className="percentage-value">{currentValues[option] || 0}%</span>
          </div>
        ))}
        <div className={`total-percentage ${isValid ? 'valid' : 'invalid'}`}>
          Total: {total}% {isValid ? '✓' : `(Must equal 100%)`}
        </div>
      </div>
    );
  };

  const renderOptions = () => {
    switch (question.type) {
      case 'radio':
        return (
          <div className="options-container">
            {question.options?.map(option => (
              <label key={option} className="radio-label">
                <input
                  type="radio"
                  name={question.id}
                  className="radio-input"
                  checked={answers[question.id] === option}
                  onChange={() => handleAnswer(option)}
                />
                <span className="radio-custom"></span>
                <span className="radio-text">{option}</span>
              </label>
            ))}
          </div>
        );

      case 'checkbox':
        return (
          <div className="options-container">
            {question.options?.map(option => (
              <label key={option} className="checkbox-label">
                <input
                  type="checkbox"
                  name={question.id}
                  className="checkbox-input"
                  checked={(answers[question.id] || []).includes(option)}
                  onChange={(e) => {
                    const currentAnswers = answers[question.id] || [];
                    const newAnswers = e.target.checked
                      ? [...currentAnswers, option]
                      : currentAnswers.filter((a: string) => a !== option);
                    handleAnswer(newAnswers);
                  }}
                />
                <span className="checkbox-custom"></span>
                <span className="checkbox-text">{option}</span>
              </label>
            ))}
            {question.hasOther && (
              <div className="other-option">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name={question.id}
                    className="checkbox-input"
                    checked={(answers[question.id] || []).includes(`Other: ${otherValue}`)}
                    onChange={(e) => {
                      const currentAnswers = answers[question.id] || [];
                      const otherAnswer = `Other: ${otherValue}`;
                      const newAnswers = e.target.checked
                        ? [...currentAnswers.filter((a: string) => !a.startsWith('Other:')), otherAnswer]
                        : currentAnswers.filter((a: string) => !a.startsWith('Other:'));
                      handleAnswer(newAnswers);
                    }}
                  />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-text">Other:</span>
                </label>
                <input
                  type="text"
                  value={otherValue}
                  onChange={handleOtherInput}
                  placeholder="Please specify"
                  className="other-input"
                />
              </div>
            )}
          </div>
        );

      case 'textarea':
        return (
          <textarea
            className="textarea-input"
            value={answers[question.id] || ''}
            onChange={(e) => handleAnswer(e.target.value)}
            placeholder={question.placeholder}
          />
        );

      case 'percentage_grid':
        return renderPercentageGrid();

      default:
        return null;
    }
  };

  if (!section || !question) {
    return <div>Loading assessment questions...</div>;
  }

  return (
    <div className="assessment-card">
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${(currentQuestionNumber / totalQuestions) * 100}%` }}
        />
        <span className="progress-text">Question {currentQuestionNumber} of {totalQuestions}</span>
      </div>

      {saveStatus && (
        <div className="save-status">
          {saveStatus}
        </div>
      )}

      {currentQuestion === 0 && (
        <div className="section-header">
          <div className="section-emoji">{section.emoji}</div>
          <h2 className="section-title">{section.title}</h2>
          <p className="section-subtitle">{section.subtitle}</p>
          {section.description && (
            <p className="section-description">{section.description}</p>
          )}
        </div>
      )}

      <div className="question-container">
        <h3 className="question">{question.question}</h3>
        {renderOptions()}
      </div>

      <div className="navigation-buttons">
        <button
          type="button"
          className="nav-btn prev-btn"
          onClick={handlePrevious}
          disabled={currentSection === 0 && currentQuestion === 0}
        >
          <span className="arrow">←</span>
          Previous
        </button>
        <button
          type="button"
          className="nav-btn save-btn"
          onClick={saveProgress}
        >
          Save Progress
        </button>
        <button
          type="button"
          className="nav-btn next-btn"
          onClick={handleNext}
          disabled={
            isSubmitting || 
            (question.type === 'percentage_grid' && 
             Object.values(answers[question.id] || {}).reduce((sum: number, value: any) => sum + (Number(value) || 0), 0) !== 100)
          }
        >
          {isSubmitting ? 'Submitting...' : (currentSection === sections.length - 1 && 
           currentQuestion === section.questions.length - 1 ? 'Finish' : 'Next')}
          <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
}