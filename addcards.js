const oM = [
    {
      id: 0,
      emoji: "🤖",
      name: "AI-Powered AR Anomaly Detection",
      description: "Android AR app with TensorFlow anomaly detection at 95%+ accuracy across 50+ device models. Automated CSV/email reporting via AWS Lambda — deployed for L&T.",
      tags: ["TensorFlow", "AR Foundation", "Python", "Android", "AWS Lambda"],
      liveview: null,
      alt: "AI AR Anomaly Detection for L&T",
      status: "Production"
    },
    {
      id: 1,
      emoji: "🔍",
      name: "Wire AI Anomaly Detection",
      description: "OpenCV + TensorFlow quality control pipeline — 500+ parts/hour throughput, 70% reduction in manual inspection effort. Deployed for Amphenol.",
      tags: ["OpenCV", "TensorFlow", "Python", "Quality Control"],
      liveview: null,
      alt: "Wire Anomaly Detection for Amphenol",
      status: "Production"
    },
    {
      id: 2,
      emoji: "🎨",
      name: "AI Image-to-3D Generator",
      description: "Neural rendering AI agent that converts 2D images to full 3D models. Python backend powering a Unity frontend for real-time previewing.",
      tags: ["Neural Rendering", "Python", "Unity", "AI Agent"],
      liveview: null,
      alt: "AI Image to 3D Generator",
      status: "New"
    },
    {
      id: 3,
      emoji: "👔",
      name: "Virtual Try-On App",
      description: "India's first full-body AR try-on — MediaPipe pose estimation running at 30+ FPS on Android devices. End-to-end garment overlay in real time.",
      tags: ["MediaPipe", "AR", "Android", "Pose Estimation"],
      liveview: null,
      alt: "Virtual Try-On AR App",
      status: "Active"
    },
    {
      id: 4,
      emoji: "📋",
      name: "AR SaaS Platform — Business Card",
      description: "Augmented Reality business card platform with 3D avatar integration. Scan a physical card to launch an interactive AR experience.",
      tags: ["Unity", "AR Foundation", "Avatar", "SaaS"],
      liveview: null,
      alt: "AR Business Card SaaS Platform",
      status: "Production"
    },
    {
      id: 5,
      emoji: "🔧",
      name: "Remote Assistance AR Platform",
      description: "Enterprise-grade AR remote assistance tool with live 3D annotation. Field engineers receive real-time expert guidance overlaid on their view.",
      tags: ["Unity", "AR", "WebRTC", "Live Annotation"],
      liveview: null,
      alt: "Remote Assistance AR Platform",
      status: "Active"
    },
    {
      id: 6,
      emoji: "⚡",
      name: "Welding VR Simulator",
      description: "Professional welding training simulator with SenseGlove Nova haptic feedback. Certified training environment built for TAFE — replicating real weld conditions.",
      tags: ["Unity", "VR", "HTC Vive", "Haptics"],
      liveview: null,
      alt: "Welding VR Simulator for TAFE",
      status: "Production"
    },
    {
      id: 7,
      emoji: "🪚",
      name: "Carpentry VR Training",
      description: "Immersive carpentry skills simulator on Meta Quest. Students practice hand-tool techniques in a fully interactive virtual workshop environment.",
      tags: ["Unity", "VR", "Meta Quest", "Training"],
      liveview: null,
      alt: "Carpentry VR Training",
      status: "Production"
    },
    {
      id: 8,
      emoji: "🏗️",
      name: "Boom Lift VR Simulator",
      description: "Industrial aerial work platform training with certified safety protocols. Operators practice boom-lift manoeuvres in a high-fidelity virtual environment.",
      tags: ["Unity", "VR", "Industrial", "Safety"],
      liveview: null,
      alt: "Boom Lift VR Simulator",
      status: "Active"
    },
    {
      id: 9,
      emoji: "🪂",
      name: "Parachute VR Simulator",
      description: "Military-grade parachute jump training on Meta Quest. Simulates full freefall and landing sequences with precise physics for defence training.",
      tags: ["Unity", "VR", "Military", "Meta Quest"],
      liveview: null,
      alt: "Parachute VR Simulator",
      status: "Active"
    },
    {
      id: 10,
      emoji: "🎓",
      name: "BITS Pilani Multiplayer XR LMS",
      description: "Campus-scale XR Learning Management System connecting 3,000+ students. Multiplayer virtual classrooms powered by Photon for concurrent sessions.",
      tags: ["Unity", "VR", "Photon", "Education"],
      liveview: null,
      alt: "BITS Pilani XR Learning Platform",
      status: "Production"
    },
    {
      id: 11,
      emoji: "🏦",
      name: "Metaverse Banking Platform",
      description: "VR banking environment supporting 50+ concurrent users with Photon networking and Agora voice chat. Real-time financial service interactions in a virtual branch.",
      tags: ["Unity", "Photon", "Agora", "VR"],
      liveview: null,
      alt: "Metaverse Banking Platform",
      status: "Production"
    },
    {
      id: 12,
      emoji: "🔥",
      name: "Fire Safety MR Training",
      description: "Mixed Reality fire safety training on HoloLens 2. Trainees interact with holographic fire hazards overlaid on their real workspace environment.",
      tags: ["Unity", "HoloLens 2", "Mixed Reality"],
      liveview: null,
      alt: "Fire Safety MR Training",
      status: "Active"
    },
    {
      id: 13,
      emoji: "🎮",
      name: "AR Pose Detection Game",
      description: "Mobile AR game using MediaPipe ML pose tracking. Players control game elements through real body movements captured via the device camera.",
      tags: ["MediaPipe", "AR", "Machine Learning", "Mobile"],
      liveview: null,
      alt: "AR Pose Detection Game",
      status: "Production"
    },
    {
      id: 14,
      emoji: "💬",
      name: "AR Banking Chatbot",
      description: "Java NLP-powered banking assistant with an augmented reality interface. Customers get contextual financial guidance through an interactive AR overlay.",
      tags: ["Java", "NLP", "AR", "Chatbot"],
      liveview: null,
      alt: "AR Banking Chatbot",
      status: "Production"
    },
    {
      id: 15,
      emoji: "🚗",
      name: "VR Caren Driving Simulator",
      description: "Advanced vehicle driving simulator with realistic physics. Learners practice traffic scenarios and hazard perception in a fully immersive VR environment.",
      tags: ["Unity", "VR", "Driving", "Physics"],
      liveview: null,
      alt: "VR Caren Driving Simulator",
      status: "Active"
    },
    {
      id: 16,
      emoji: "🥩",
      name: "Butcher Training VR",
      description: "Professional meat processing skills simulator on HTC Vive. Trainees practice cutting techniques and hygiene protocols in a safe, repeatable virtual setting.",
      tags: ["Unity", "VR", "HTC Vive", "Training"],
      liveview: null,
      alt: "Butcher Training VR Simulator",
      status: "New"
    },
    {
      id: 17,
      emoji: "🌐",
      name: "E-Commerce Web Solutions",
      description: "8+ custom e-commerce platforms delivered for SMB clients. Full-stack builds with ReactJS + Laravel + PostgreSQL — from scoping through to deployment.",
      tags: ["ReactJS", "Laravel", "PostgreSQL", "Full-Stack"],
      liveview: null,
      alt: "E-Commerce Web Solutions",
      status: "Production"
    },
  ];

  // Status badge colour mapping
  const statusColors = {
    "Production": { bg: "rgba(40,200,100,0.15)", border: "rgba(40,200,100,0.5)", color: "#28C864" },
    "Active":     { bg: "rgba(0,183,255,0.15)",  border: "rgba(0,183,255,0.5)",  color: "#00b7ff" },
    "New":        { bg: "rgba(255,146,62,0.15)",  border: "rgba(255,146,62,0.5)",  color: "#FF923E" },
  };

  class lM {
    constructor() {
      he(this, "domElements", {
        renderContainer: document.getElementById("work-render-container"),
      });
      (this.experience = new ye()),
        (this.sounds = this.experience.sounds),
        (this.items = oM),
        this.renderItems();
    }

    renderItems() {
      this.items.forEach((e) => {
        this.domElements.renderContainer.insertAdjacentHTML(
          "beforeend",
          `
              <div id="work-item-${e.id}" class="work-item-container column">
                  <div class="work-item-image" style="
                      height: 200px;
                      width: 100%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      background: linear-gradient(135deg, #091434 0%, #0a1f4e 50%, #091434 100%);
                      border-bottom: 1px solid rgba(0,183,255,0.25);
                      position: relative;
                      flex-shrink: 0;
                  ">
                      <span style="font-size: 72px; line-height: 1; user-select: none;">${e.emoji}</span>
                      ${e.status ? `<span style="
                          position: absolute;
                          top: 10px;
                          right: 10px;
                          font-size: 10px;
                          font-weight: 700;
                          letter-spacing: 0.05em;
                          padding: 3px 8px;
                          border-radius: 3px;
                          background: ${(statusColors[e.status] || statusColors["Active"]).bg};
                          border: 1px solid ${(statusColors[e.status] || statusColors["Active"]).border};
                          color: ${(statusColors[e.status] || statusColors["Active"]).color};
                      ">${e.status.toUpperCase()}</span>` : ""}
                  </div>
                  <div class="work-item-content-container">
                      <h3>${e.name}</h3>
                      <div class="work-item-tag-container row">
                          ${this.renderTags(e.tags)}
                      </div>
                      <span>${e.description}</span>
                  </div>
                  <div class="work-item-button-container row">
                      ${this.renderButtons(e)}
                  </div>
                  ${e.bannerIcons ? this.renderBanner(e) : ""}
              </div>
              `
        ),
          this.addEventListenersToCard(e);
      });
    }

    renderBanner(e) {
      let t = "";
      return (
        (t = `
              <div class="work-banner-container row center">
                  ${e.bannerIcons.map(
                    (n) =>
                      `<img src="${n.src}" alt="${n.alt}" height="64" width="64"/>`
                  )}
                  <span>Website Of<br>The Day</span>
              </div>
          `),
        t
      );
    }

    renderButtons(e) {
      let t = "";
      if (e.liveview) {
        t = `
          <div id="work-item-orange-button-${e.id}" class="work-item-orange-button small-button center orange-hover" style="width: 100%; margin: 0;">
              Live View
          </div>`;
      } else {
        t = `
          <div id="work-item-gray-button-${e.id}" class="work-item-gray-button center" style="width: 100%; background: #1a2a4a; border: 1px solid rgba(0,183,255,0.2); color: rgba(255,255,255,0.35); cursor: unset;">
              Enterprise / NDA
          </div>`;
      }
      return t;
    }

    renderTags(tags) {
      let t = "";
      for (let n = 0; n < tags.length; n++) {
        t += `<span style="
            display: inline-block;
            background: rgba(0,183,255,0.12);
            border: 1px solid rgba(0,183,255,0.35);
            color: #60caff;
            padding: 2px 8px;
            border-radius: 3px;
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 0.03em;
            margin: 2px 3px 2px 0;
        ">${tags[n]}</span>`;
      }
      return t;
    }

    addEventListenersToCard(e) {
      const t = document.getElementById("work-item-" + e.id);
      t.addEventListener("click", () => {
        t.classList.contains("work-inactive-item-container") &&
          document
            .getElementById("work-item-0")
            .classList.contains("work-item-container-transition") &&
          ((this.experience.ui.work.cards.currentItemIndex = -e.id + 4),
          this.experience.ui.work.cards.updatePositions(),
          this.sounds.play("buttonClick"));
      });

      if (e.liveview) {
        document
          .getElementById("work-item-orange-button-" + e.id)
          .addEventListener("click", () => {
            window.open(e.liveview, "_blank").focus();
          });
      }
    }
  }
