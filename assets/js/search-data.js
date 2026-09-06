// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "* denotes equal contribution and joint lead authorship.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-poseur-is-accepted-by-eccv-2022-sparkles",
          title: 'Poseur is accepted by ECCV 2022. :sparkles:',
          description: "",
          section: "News",},{id: "news-point-teaching-is-accepted-by-aaai-2023-sparkles",
          title: 'Point-Teaching is accepted by AAAI 2023. :sparkles:',
          description: "",
          section: "News",},{id: "news-release-humanwild-focusing-on-perspective-distorted-3d-human-pose-and-shape-estimation-sparkles",
          title: 'Release HumanWild, focusing on perspective-distorted 3D human pose and shape estimation. :sparkles:',
          description: "",
          section: "News",},{id: "news-zolly-is-accepted-by-iccv-2023-selected-as-oral-top-1-8-sparkles",
          title: 'Zolly is accepted by ICCV 2023, selected as oral (top 1.8%). :sparkles:',
          description: "",
          section: "News",},{id: "news-release-humanwild-feel-free-to-try-our-huggingface-demo",
          title: 'Release HumanWild, feel free to try our Huggingface Demo. 🎉',
          description: "",
          section: "News",},{id: "news-release-geobench-a-monocular-geometry-benchmark-for-analyzing-sota-monocular-geometry-estimation-models",
          title: 'Release GeoBench, a monocular geometry benchmark for analyzing SOTA monocular geometry estimation models....',
          description: "",
          section: "News",},{id: "news-genpercept-is-accepted-by-iclr-2025",
          title: 'GenPercept is accepted by ICLR 2025. 🎉',
          description: "",
          section: "News",},{id: "news-gvm-a-generative-video-matting-framework-has-been-accepted-by-siggraph-2025",
          title: 'GVM, a generative video matting framework, has been accepted by SIGGRAPH 2025. 🎉...',
          description: "",
          section: "News",},{id: "news-pomato-is-accepted-by-iccv-2025-with-pointmap-representation-for-dynamic-3d-reconstruction",
          title: 'POMATO is accepted by ICCV 2025, with pointmap representation for dynamic 3D reconstruction....',
          description: "",
          section: "News",},{id: "news-humanwild-is-accepted-by-tpami-an-updated-demo-is-available-on-huggingface",
          title: 'HumanWild is accepted by TPAMI. An updated demo is available on Huggingface.',
          description: "",
          section: "News",},{id: "projects-geobench-amp-58-benchmarking-and-analyzing-monocular-geometry-estimation-models",
          title: 'GeoBench&amp;amp;#58 Benchmarking and Analyzing Monocular Geometry Estimation Models',
          description: "a comprehensive benchmark for monocular geometry estimation models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/geobench/";
            },},{id: "projects-3d-human-reconstrution-in-the-wild-with-synthetic-data-using-generative-models",
          title: '3D Human Reconstrution in the Wild with Synthetic Data using Generative Models',
          description: "a pipeline for generating in the wild human images and annotations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/humanwild/";
            },},{id: "projects-poseur-direct-human-pose-regression-with-transformers",
          title: 'Poseur: Direct Human Pose Regression with Transformers',
          description: "a regression-based human pose estimator",
          section: "Projects",handler: () => {
              window.location.href = "/projects/poseur/";
            },},{id: "projects-zolly-zoom-focal-length-correctly-for-perspective-distorted-human-mesh-reconstruction-iccv-2023-oral",
          title: 'Zolly: Zoom Focal Length Correctly for Perspective-Distorted Human Mesh Reconstruction ICCV 2023 Oral...',
          description: "perspective-distorted human pose and shape estimation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zolly/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%6E%67%74%61%6F.%67%65@%61%64%65%6C%61%69%64%65.%65%64%75.%61%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/YongtaoGe", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=r8SywYYAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/ovoz_z", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yongtao-ge-1823461b7", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-1265-3204", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
