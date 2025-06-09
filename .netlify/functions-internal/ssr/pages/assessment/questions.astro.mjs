import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_MQ-OKnVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_DWONt-1M.mjs';
import { $ as $$Header } from '../../chunks/Header_DgcknLtB.mjs';
import { $ as $$FloatingActionButton } from '../../chunks/FloatingActionButton_DlOUReT-.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                                        */
import { s as supabase } from '../../chunks/supabase_BwhYzpiX.mjs';
export { renderers } from '../../renderers.mjs';

function Assessment2({ sections, assessmentId, token }) {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otherValue, setOtherValue] = useState("");
  const [saveStatus, setSaveStatus] = useState(null);
  const totalQuestions = sections.reduce((total, section2) => total + section2.questions.length, 0);
  const currentQuestionNumber = sections.slice(0, currentSection).reduce((total, section2) => total + section2.questions.length, 0) + currentQuestion + 1;
  const section = sections[currentSection];
  const question = section?.questions[currentQuestion];
  const handleAnswer = (value) => {
    setAnswers((prev) => ({
      ...prev,
      [question.id]: value
    }));
    const isLastQuestion = currentSection === sections.length - 1 && currentQuestion === section.questions.length - 1;
    if (question.type === "radio" && !isLastQuestion && !question.hasOther) {
      handleNext();
    }
  };
  const handleOtherInput = (e) => {
    setOtherValue(e.target.value);
    if (question.type === "checkbox") {
      const currentAnswers = answers[question.id] || [];
      if (currentAnswers.some((a) => a.startsWith("Other:"))) {
        const newAnswers = currentAnswers.map(
          (a) => a.startsWith("Other:") ? `Other: ${e.target.value}` : a
        );
        setAnswers((prev) => ({
          ...prev,
          [question.id]: newAnswers
        }));
      }
    }
  };
  const saveProgress = async () => {
    try {
      setSaveStatus("Saving progress...");
      const currentQuestionId = await getQuestionId(question.id);
      const userData = JSON.parse(sessionStorage.getItem("assessmentUserData") || "{}");
      const userEmail = userData.email;
      console.log("Saving progress with:", {
        assessmentId,
        token,
        answers,
        questionId: currentQuestionId,
        userEmail
      });
      const response = await fetch("/api/save-assessment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          assessmentId,
          token,
          answers,
          questionId: currentQuestionId,
          userEmail
        })
      });
      const data = await response.json();
      if (!response.ok) {
        console.warn("Non-OK response from save-assessment:", data);
        if (data.success) {
          setSaveStatus("Progress saved! You can resume later.");
          setTimeout(() => setSaveStatus(null), 3e3);
          return data.resumeUrl;
        } else {
          throw new Error(data.error || "Failed to save progress");
        }
      }
      setSaveStatus("Progress saved! You can resume later.");
      setTimeout(() => setSaveStatus(null), 3e3);
      return data.resumeUrl;
    } catch (error) {
      console.error("Error saving progress:", error);
      if (error instanceof TypeError && error.message.includes("fetch failed")) {
        setSaveStatus("Progress may have been saved. Continue with your assessment.");
      } else {
        setSaveStatus("Failed to save progress. Please try again later.");
      }
      setTimeout(() => setSaveStatus(null), 3e3);
      return null;
    }
  };
  const getQuestionId = async (questionKey) => {
    try {
      const response = await fetch("/api/get-question-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ questionKey })
      });
      if (!response.ok) {
        throw new Error("Failed to get question ID");
      }
      const data = await response.json();
      return data.id;
    } catch (error) {
      console.error("Error getting question ID:", error);
      return "";
    }
  };
  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const userData = JSON.parse(sessionStorage.getItem("assessmentUserData") || "{}");
      try {
        const zapierWebhookUrl = "https://hooks.zapier.com/hooks/catch/4197949/2pws7oe/";
        const questions = [];
        const responses = [];
        sections.forEach((section2) => {
          section2.questions.forEach((question2) => {
            questions.push(question2.question);
            let response2 = answers[question2.id];
            if (Array.isArray(response2)) {
              response2 = response2.join(", ");
            } else if (typeof response2 === "object" && response2 !== null) {
              response2 = Object.entries(response2).map(([key, value]) => `${key}: ${value}%`).join(", ");
            }
            responses.push(response2 || "");
          });
        });
        const fullData = {
          data: {
            questions,
            responses,
            userData
          },
          submittedAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        await fetch(zapierWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(fullData),
          mode: "no-cors"
        });
      } catch (zapierError) {
        console.error("Error sending to Zapier:", zapierError);
      }
      const response = await fetch("/api/submit-assessment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userData,
          answers,
          assessmentId,
          token
        })
      });
      const responseData = await response.json();
      if (!responseData.success) {
        throw new Error(responseData.error || "Failed to submit assessment");
      }
      window.location.href = "/assessment/thank-you";
    } catch (error) {
      console.error("Error submitting assessment:", error);
      setIsSubmitting(false);
      alert(`Error submitting assessment: ${error.message}`);
    }
  };
  const handleNext = () => {
    if (question.type === "percentage_grid") {
      const values = answers[question.id] || {};
      const total = Object.values(values).reduce((sum, value) => sum + (Number(value) || 0), 0);
      if (total !== 100) {
        return;
      }
    }
    if (currentQuestion < section.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else if (currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1);
      setCurrentQuestion(0);
    } else {
      handleSubmit();
    }
    if (currentQuestionNumber % 5 === 0) {
      saveProgress();
    }
  };
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    } else if (currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
      setCurrentQuestion(sections[currentSection - 1].questions.length - 1);
    }
  };
  const renderPercentageGrid = () => {
    if (!question.percentageOptions) return null;
    const currentValues = answers[question.id] || {};
    const total = Object.values(currentValues).reduce((sum, value) => sum + (Number(value) || 0), 0);
    const isValid = total === 100;
    return /* @__PURE__ */ jsxs("div", { className: "percentage-grid", children: [
      question.percentageOptions.map((option) => /* @__PURE__ */ jsxs("div", { className: "percentage-row", children: [
        /* @__PURE__ */ jsx("label", { className: "percentage-label", children: option }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "range",
            min: "0",
            max: "100",
            step: "5",
            value: currentValues[option] || 0,
            onChange: (e) => {
              const newValue = Number(e.target.value);
              const updatedValues = {
                ...currentValues,
                [option]: newValue
              };
              handleAnswer(updatedValues);
            },
            className: "percentage-slider"
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: "percentage-value", children: [
          currentValues[option] || 0,
          "%"
        ] })
      ] }, option)),
      /* @__PURE__ */ jsxs("div", { className: `total-percentage ${isValid ? "valid" : "invalid"}`, children: [
        "Total: ",
        total,
        "% ",
        isValid ? "✓" : `(Must equal 100%)`
      ] })
    ] });
  };
  const renderOptions = () => {
    switch (question.type) {
      case "radio":
        return /* @__PURE__ */ jsx("div", { className: "options-container", children: question.options?.map((option) => /* @__PURE__ */ jsxs("label", { className: "radio-label", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "radio",
              name: question.id,
              className: "radio-input",
              checked: answers[question.id] === option,
              onChange: () => handleAnswer(option)
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "radio-custom" }),
          /* @__PURE__ */ jsx("span", { className: "radio-text", children: option })
        ] }, option)) });
      case "checkbox":
        return /* @__PURE__ */ jsxs("div", { className: "options-container", children: [
          question.options?.map((option) => /* @__PURE__ */ jsxs("label", { className: "checkbox-label", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "checkbox",
                name: question.id,
                className: "checkbox-input",
                checked: (answers[question.id] || []).includes(option),
                onChange: (e) => {
                  const currentAnswers = answers[question.id] || [];
                  const newAnswers = e.target.checked ? [...currentAnswers, option] : currentAnswers.filter((a) => a !== option);
                  handleAnswer(newAnswers);
                }
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "checkbox-custom" }),
            /* @__PURE__ */ jsx("span", { className: "checkbox-text", children: option })
          ] }, option)),
          question.hasOther && /* @__PURE__ */ jsxs("div", { className: "other-option", children: [
            /* @__PURE__ */ jsxs("label", { className: "checkbox-label", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "checkbox",
                  name: question.id,
                  className: "checkbox-input",
                  checked: (answers[question.id] || []).includes(`Other: ${otherValue}`),
                  onChange: (e) => {
                    const currentAnswers = answers[question.id] || [];
                    const otherAnswer = `Other: ${otherValue}`;
                    const newAnswers = e.target.checked ? [...currentAnswers.filter((a) => !a.startsWith("Other:")), otherAnswer] : currentAnswers.filter((a) => !a.startsWith("Other:"));
                    handleAnswer(newAnswers);
                  }
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "checkbox-custom" }),
              /* @__PURE__ */ jsx("span", { className: "checkbox-text", children: "Other:" })
            ] }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                value: otherValue,
                onChange: handleOtherInput,
                placeholder: "Please specify",
                className: "other-input"
              }
            )
          ] })
        ] });
      case "textarea":
        return /* @__PURE__ */ jsx(
          "textarea",
          {
            className: "textarea-input",
            value: answers[question.id] || "",
            onChange: (e) => handleAnswer(e.target.value),
            placeholder: question.placeholder
          }
        );
      case "percentage_grid":
        return renderPercentageGrid();
      default:
        return null;
    }
  };
  if (!section || !question) {
    return /* @__PURE__ */ jsx("div", { children: "Loading assessment questions..." });
  }
  return /* @__PURE__ */ jsxs("div", { className: "assessment-card", children: [
    /* @__PURE__ */ jsxs("div", { className: "progress-bar", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "progress",
          style: { width: `${currentQuestionNumber / totalQuestions * 100}%` }
        }
      ),
      /* @__PURE__ */ jsxs("span", { className: "progress-text", children: [
        "Question ",
        currentQuestionNumber,
        " of ",
        totalQuestions
      ] })
    ] }),
    saveStatus && /* @__PURE__ */ jsx("div", { className: "save-status", children: saveStatus }),
    currentQuestion === 0 && /* @__PURE__ */ jsxs("div", { className: "section-header", children: [
      /* @__PURE__ */ jsx("div", { className: "section-emoji", children: section.emoji }),
      /* @__PURE__ */ jsx("h2", { className: "section-title", children: section.title }),
      /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: section.subtitle }),
      section.description && /* @__PURE__ */ jsx("p", { className: "section-description", children: section.description })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "question-container", children: [
      /* @__PURE__ */ jsx("h3", { className: "question", children: question.question }),
      renderOptions()
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "navigation-buttons", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          className: "nav-btn prev-btn",
          onClick: handlePrevious,
          disabled: currentSection === 0 && currentQuestion === 0,
          children: [
            /* @__PURE__ */ jsx("span", { className: "arrow", children: "←" }),
            "Previous"
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: "nav-btn save-btn",
          onClick: saveProgress,
          children: "Save Progress"
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          className: "nav-btn next-btn",
          onClick: handleNext,
          disabled: isSubmitting || question.type === "percentage_grid" && Object.values(answers[question.id] || {}).reduce((sum, value) => sum + (Number(value) || 0), 0) !== 100,
          children: [
            isSubmitting ? "Submitting..." : currentSection === sections.length - 1 && currentQuestion === section.questions.length - 1 ? "Finish" : "Next",
            /* @__PURE__ */ jsx("span", { className: "arrow", children: "→" })
          ]
        }
      )
    ] })
  ] });
}

const $$Astro = createAstro();
const $$Questions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Questions;
  const assessmentId = Astro2.url.searchParams.get("assessmentId");
  const token = Astro2.url.searchParams.get("token");
  const { data: questionsData, error } = await supabase.from("questions").select("*").eq("assessment_type", "kbyg").eq("is_active", true).order("question_order", { ascending: true });
  if (error) {
    console.error("Error fetching questions:", error);
  }
  const groupedQuestions = questionsData?.reduce((acc, question) => {
    const sectionId = question.section_id;
    if (!acc[sectionId]) {
      acc[sectionId] = {
        id: sectionId,
        emoji: question.section_emoji || getEmojiForSection(sectionId),
        title: question.section_title || capitalizeFirstLetter(sectionId),
        subtitle: question.section_subtitle || "",
        description: question.section_description || "",
        questions: []
      };
    }
    acc[sectionId].questions.push({
      id: question.question_key,
      type: question.type,
      question: question.question_text,
      options: question.options,
      placeholder: question.placeholder,
      hasOther: question.has_other || false,
      percentageOptions: question.percentage_options
    });
    return acc;
  }, {});
  function getEmojiForSection(sectionId) {
    const emojis = {
      "curiosity": "\u{1F913}",
      "capture": "\u{1F4E3}",
      "convert": "\u{1F4BC}",
      "create": "\u{1F6E0}\uFE0F",
      "control": "\u{1F9FE}",
      "culture": "\u{1F91D}"
    };
    return emojis[sectionId] || "\u{1F4CB}";
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const sections = Object.values(groupedQuestions || {});
  const fallbackSections = [
    {
      id: "curiosity",
      emoji: "\u{1F913}",
      title: "Curiosity Section",
      subtitle: "Ted Lasso getting to know you and your business",
      description: "Let's get a lay of the land before we explore where you want to go.",
      questions: [
        {
          id: "annual-revenue",
          type: "radio",
          question: "What's your current annual revenue?",
          options: [
            "Under $2 million",
            "$2 million \u2013 $5 million",
            "$5 million \u2013 $8 million",
            "$8 million \u2013 $10 million",
            "Over $10 million"
          ]
        },
        {
          id: "financial-goals",
          type: "radio",
          question: "When you think about financial goals, which one best describes your top priority right now?",
          options: [
            "Increase total revenue",
            "Grow net profit",
            "Reduce cost of goods sold (COGS)",
            "Invest in new equipment or infrastructure",
            "Boost marketing or sales spending"
          ]
        },
        {
          id: "team-size",
          type: "radio",
          question: "How many dedicated sales reps do you have (not including office staff or installers)?",
          options: [
            "1\u20134",
            "5\u20138",
            "9\u201312",
            "13\u201316",
            "17 or more"
          ]
        },
        {
          id: "org-structure",
          type: "radio",
          question: "How would you describe your current org structure?",
          options: [
            "Clear and defined \u2013 we've got roles, titles, and accountability",
            "Functional but informal \u2013 we know who does what, more or less",
            "Pretty loose \u2013 everyone just jumps in and gets stuff done",
            "What is an org structure?"
          ]
        },
        {
          id: "sop-status",
          type: "radio",
          question: "Are your Standard Operating Procedures (SOPs) documented and followed?",
          options: [
            "Yes \u2013 we're a well-oiled SOP machine",
            "Kind of \u2013 we have them, but people don't always follow them",
            "Not really \u2013 we rely more on experience than documented processes",
            "What's an SOP?"
          ]
        },
        {
          id: "biggest-challenge",
          type: "textarea",
          question: "What's the single biggest challenge you're facing in your business right now?",
          placeholder: "Share what's keeping you up at night or slowing you down the most."
        }
      ]
    },
    {
      id: "capture",
      emoji: "\u{1F4E3}",
      title: "Capture",
      subtitle: "Marketing",
      description: "How you attract and acquire customers.",
      questions: [
        {
          id: "lead-sources",
          type: "percentage_grid",
          question: "What percentage of your leads come from the following sources?",
          percentageOptions: [
            "Google LSA (Local Service Ads)",
            "Google PPC (Pay-Per-Click)",
            "SEO (Organic traffic)",
            "Facebook / Instagram Ads",
            "Referrals / Repeat Customers",
            "Door-to-Door / Canvassing",
            "Lead aggregators (HomeAdvisor, Angi, etc.)",
            "TV / Radio / Yard signs / Wraps",
            "Other"
          ]
        },
        {
          id: "lead-response",
          type: "radio",
          question: "How fast do you typically respond to new leads (calls, forms, messages)?",
          options: [
            "Within 5 minutes",
            "Within 15 minutes",
            "Within an hour",
            "Same day",
            "It varies a lot"
          ]
        },
        {
          id: "marketing-responsibility",
          type: "radio",
          question: "Who's responsible for marketing in your company?",
          options: [
            "Full-time internal marketing person/team",
            "A leader (not owner) handles it part-time",
            "Outsourced to an agency or freelancer",
            "Owner wears that hat too",
            "No one owns it consistently right now"
          ]
        },
        {
          id: "lead-intake",
          type: "radio",
          question: "Do you have a lead intake process that's followed every time?",
          options: [
            "Yes \u2013 it's documented and followed",
            "Mostly followed",
            "Somewhat \u2013 there's a process, but not always followed",
            "Not really \u2013 it depends who answers the phone or gets the lead"
          ]
        },
        {
          id: "content-creation",
          type: "radio",
          question: "Are you consistently creating and posting video or social media content?",
          options: [
            "Yes \u2013 we post regularly and intentionally",
            "Sometimes \u2013 when we remember or have something cool",
            "Rarely \u2013 it's not a focus",
            "Never \u2013 not doing any content right now"
          ]
        },
        {
          id: "marketing-spend",
          type: "radio",
          question: "What's your average monthly marketing spend?",
          options: [
            "Under $2,000",
            "$2,000\u2013$5,000",
            "$5,000\u2013$10,000",
            "$10,000\u2013$20,000",
            "Over $20,000",
            "Not sure"
          ]
        },
        {
          id: "marketing-improvement",
          type: "textarea",
          question: "What is one change to your marketing strategy that would have the greatest impact on your business?",
          placeholder: "Share what would make the biggest difference in your marketing efforts."
        }
      ]
    },
    {
      id: "convert",
      emoji: "\u{1F4BC}",
      title: "Convert",
      subtitle: "Sales",
      description: "How you turn leads into paying customers.",
      questions: [
        {
          id: "sales-process",
          type: "radio",
          question: "Do you have a clearly defined sales process\u2014and is it followed?",
          options: [
            "Yes \u2013 it's written out and consistently followed",
            "We have one, but it's not always used",
            "Kind of \u2013 it's more of a general approach than a real process",
            "No \u2013 every rep does it their own way"
          ]
        },
        {
          id: "sales-kpis",
          type: "radio",
          question: "Do you have set sales KPIs (key performance indicators) that your team is held accountable to?",
          options: [
            "Yes \u2013 we track KPIs weekly and reps are coached on them",
            "We have KPIs that are tracked, we do not coach on them weekly",
            "We have targets, but no consistent follow-up or accountability",
            "We don't have any specific KPIs in place"
          ]
        },
        {
          id: "closing-rate",
          type: "radio",
          question: "What's your current sales closing rate\u2014and how confident are you in that number?",
          options: [
            "Under 20% \u2013 and we track it closely",
            "20\u201340% \u2013 and we track it closely",
            "40\u201360% \u2013 and we track it closely",
            "Over 60% \u2013 and we track it closely",
            "We think under 20%",
            "We think around 20-40%",
            "We think around 40-60%",
            "We think over 60%",
            "I'm not totally sure \u2013 we don't track it consistently"
          ]
        },
        {
          id: "sales-team-size",
          type: "radio",
          question: "How big is your sales team (where the rep is only responsible for Sales)",
          options: [
            "1 (just the owner or one salesperson)",
            "2\u20133 reps",
            "4\u20136 reps",
            "7 or more"
          ]
        },
        {
          id: "sales-leadership",
          type: "radio",
          question: "Do you have a dedicated sales leader, and what role do they play?",
          options: [
            "Yes \u2013 full-time leader/manager, doesn't sell",
            "Yes \u2013 player/coach, manages and still sells",
            "Kind of \u2013 someone oversees the team part-time",
            "No \u2013 the team reports directly to the owner/GM"
          ]
        },
        {
          id: "sales-training",
          type: "radio",
          question: "How would you describe your sales training and onboarding?",
          options: [
            "We have a structured training program with ongoing coaching",
            `We do some training, but it's mostly "learn as you go"`,
            "New hires shadow someone for a bit, then they're on their own",
            "We don't really have a training process"
          ]
        },
        {
          id: "sales-improvement",
          type: "textarea",
          question: "What is one change to your sales strategy that would have the greatest impact on your business?",
          placeholder: "Share what would make the biggest difference in your sales performance."
        }
      ]
    },
    {
      id: "create",
      emoji: "\u{1F6E0}\uFE0F",
      title: "Create",
      subtitle: "Production & Install",
      description: "How you fulfill the work and deliver on the promise.",
      questions: [
        {
          id: "production-structure",
          type: "radio",
          question: "What does your current production/operations management structure look like?",
          options: [
            "We have a full team (GM, Ops Manager, Production Manager, Field Project Managers, and Admin support)",
            "We have some structure (like Production Manager and Admin), but not all roles are filled",
            "The sales team helps manage jobs with limited support",
            "It's handled mainly by the owner or on a job-by-job basis"
          ]
        },
        {
          id: "job-auditing",
          type: "radio",
          question: "Is there a process for auditing jobs before materials are ordered, crews are scheduled, or installs are booked with customers?",
          options: [
            "We have a step-by-step Quality Control (QC) process with specific team roles assigned",
            "Some checks happen, but it's not consistent",
            "Sales reps handle most of it themselves",
            "We don't have a formal auditing process"
          ]
        },
        {
          id: "installation-oversight",
          type: "radio",
          question: "Who typically oversees the job on installation day?",
          options: [
            "A dedicated Field Project Manager or Supervisor",
            "Sales rep checks in or handles it",
            "Owner or Production Manager tries to spot-check jobs",
            "There's no consistent field oversight"
          ]
        },
        {
          id: "production-kpis",
          type: "checkbox",
          question: "Which production KPIs do you track? Select all that apply.",
          options: [
            "Installed revenue",
            "Collected revenue",
            "Material returns",
            "Job profitability",
            "Customer satisfaction / 5-star reviews",
            "We don't currently track production KPIs"
          ]
        },
        {
          id: "conflict-resolution",
          type: "radio",
          question: "What's your system for handling job issues or customer conflicts?",
          options: [
            "We have a clear conflict resolution process that staff are trained on",
            "We deal with problems case-by-case, depending on who's involved",
            "It usually goes straight to the owner or sales rep to figure out",
            "We don't have a consistent process"
          ]
        },
        {
          id: "team-communication",
          type: "radio",
          question: "How would you rate your communication among sales, production, and the customer?",
          options: [
            "Very strong \u2013 we have clear handoffs and proactive communication",
            "Decent \u2013 we try to stay aligned, but things fall through sometimes",
            "Weak \u2013 communication gaps happen often",
            "Nonexistent \u2013 it's kind of chaotic"
          ]
        },
        {
          id: "production-improvement",
          type: "textarea",
          question: "What is one change to your production/operations that would have the greatest impact on your business?",
          placeholder: "Share what would make the biggest difference in your production and operations."
        }
      ]
    },
    {
      id: "control",
      emoji: "\u{1F9FE}",
      title: "Control",
      subtitle: "Admin & Financials",
      description: "How you manage the money, metrics, and internal operations.",
      questions: [
        {
          id: "financial-management",
          type: "radio",
          question: "Who handles your financials on a regular basis?",
          options: [
            "We have both an accountant (CPA) and a dedicated bookkeeper",
            "We have a CPA and someone in-house who handles bookkeeping",
            "We only have a CPA or bookkeeper, not both",
            "The owner does it or oversees it all",
            "No one really handles it consistently"
          ]
        },
        {
          id: "financial-software",
          type: "radio",
          question: "What software are you currently using to manage financials? Select all that apply.",
          options: [
            "QuickBooks/Sage/other accounting software",
            "Spreadsheets (Excel, Google Sheets, etc.)",
            "Our CRM has built-in financial tools",
            "We're not using anything consistently"
          ]
        },
        {
          id: "crm-software",
          type: "checkbox",
          question: "What CRM or operational software do you use to run your business?",
          options: [
            "JobNimbus",
            "AccuLynx",
            "Roofr",
            "Leap",
            "RoofLink",
            "GiddyUp",
            "ServiceTitan",
            "HubSpot",
            "Salesforce",
            "Zoho",
            "We don't use a CRM"
          ],
          hasOther: true
        },
        {
          id: "phone-system",
          type: "radio",
          question: "Do you have a business phone system (not just personal phones)?",
          options: [
            "Yes \u2013 we use a company-wide system with call tracking and recording",
            "Yes \u2013 but it's just a basic VoIP or shared cell phone",
            "No \u2013 everyone uses their own cell phones for work",
            "We're transitioning but not fully set up yet"
          ]
        },
        {
          id: "financial-review",
          type: "radio",
          question: "How often do you review financial performance (P&L, job costing, etc.)?",
          options: [
            "Weekly \u2013 we stay on top of it",
            "Monthly \u2013 we look at reports at least once a month",
            "Quarterly \u2013 we try to check in every few months",
            "Rarely \u2013 only when something feels off",
            "We don't really review financials regularly"
          ]
        },
        {
          id: "job-profitability",
          type: "radio",
          question: "How do you track job-level profitability?",
          options: [
            "Every job is broken down by revenue, cost, and margin",
            "We try to track it, but it's not always accurate or timely",
            "Only big jobs are analyzed for profit",
            "We don't track profitability at the job level"
          ]
        },
        {
          id: "financial-improvement",
          type: "textarea",
          question: "What's one area of your financials or back office that you feel needs the most attention or improvement?",
          placeholder: "Could be job costing, invoicing, collections, team systems\u2014whatever's holding things back."
        }
      ]
    },
    {
      id: "culture",
      emoji: "\u{1F91D}",
      title: "Culture",
      subtitle: "People & Leadership",
      description: "How you lead your team, build your brand from the inside, and prepare for growth.",
      questions: [
        {
          id: "employee-handbook",
          type: "radio",
          question: "Do you currently have an employee handbook or documented company policies?",
          options: [
            "Yes \u2013 we have a complete handbook that's shared with every team member",
            "We have something written, but it's outdated or not consistently used",
            "We've talked about creating one, but haven't done it yet",
            "No handbook or formal documentation"
          ]
        },
        {
          id: "onboarding",
          type: "radio",
          question: "How do you currently onboard and train new team members?",
          options: [
            "We have a structured onboarding and training process with clear milestones",
            "New hires shadow others and learn on the job",
            "We provide some training but it's not very organized",
            "There's no real onboarding\u2014just jump in and figure it out"
          ]
        },
        {
          id: "coaching-openness",
          type: "radio",
          question: "How open is your team (and leadership) to coaching and change management?",
          options: [
            "Very open \u2013 we actively seek out guidance and feedback",
            "Somewhat open \u2013 depends on the suggestion and timing",
            "Resistant \u2013 we've tried before and it didn't stick",
            "Not sure \u2013 we haven't really been tested on this yet"
          ]
        },
        {
          id: "growth-readiness",
          type: "radio",
          question: "Do you feel your company is ready to evolve and grow to the next level?",
          options: [
            "100% \u2013 we're fired up and ready",
            "Mostly \u2013 we know there are gaps, but we're committed",
            "Unsure \u2013 we want growth but aren't sure how ready we are",
            "Not quite \u2013 too much chaos right now to think about next steps"
          ]
        },
        {
          id: "leadership-style",
          type: "radio",
          question: "How would you describe your leadership style?",
          options: [
            "Empowering \u2013 we trust and develop our team",
            "Directive \u2013 we give clear instructions and expect execution",
            "Reactive \u2013 we solve problems as they come up",
            "Mixed \u2013 depends on the day and the person"
          ]
        },
        {
          id: "team-appreciation",
          type: "radio",
          question: "Do you regularly celebrate wins or show appreciation to your team?",
          options: [
            "Yes \u2013 we have systems in place to recognize and reward performance",
            "Sometimes \u2013 we try to celebrate, but it's not consistent",
            "Rarely \u2013 it's something we've talked about but haven't prioritized",
            "Not really \u2013 we stay focused on the work and results"
          ]
        },
        {
          id: "culture-improvement",
          type: "textarea",
          question: "What's one thing you'd love to improve about your company culture or team dynamic?",
          placeholder: 'This could be communication, accountability, team unity, or just feeling less "in the weeds."'
        }
      ]
    }
  ];
  const finalSections = sections.length > 0 ? sections : fallbackSections;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Growth Gauge", "data-astro-cid-rik4ivk3": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-rik4ivk3": true })} ${maybeRenderHead()}<main class="assessment-page" data-astro-cid-rik4ivk3> <section class="assessment-section" data-astro-cid-rik4ivk3> <div class="container" data-astro-cid-rik4ivk3> ${renderComponent($$result2, "Assessment2", Assessment2, { "client:load": true, "sections": finalSections, "assessmentId": assessmentId, "token": token, "client:component-hydration": "load", "client:component-path": "/Users/sandy/Downloads/project 2/src/components/Assessment2", "client:component-export": "default", "data-astro-cid-rik4ivk3": true })} </div> </section> </main> ${renderComponent($$result2, "FloatingActionButton", $$FloatingActionButton, { "data-astro-cid-rik4ivk3": true })} ` })}  `;
}, "/Users/sandy/Downloads/project 2/src/pages/assessment/questions.astro", void 0);

const $$file = "/Users/sandy/Downloads/project 2/src/pages/assessment/questions.astro";
const $$url = "/assessment/questions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Questions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
