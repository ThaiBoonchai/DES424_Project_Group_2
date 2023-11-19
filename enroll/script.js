document.addEventListener("DOMContentLoaded", function () {
    const courses = [
        { id: 1, title: "Music Production 101", instructor: "John Doe", description: "Explore the fundamentals of music production, from setting up your workspace to creating your first beats. Learn essential software tools and techniques for crafting professional-quality music." },
        { id: 2, title: "Band Management Strategies", instructor: "Jane Smith", description: "Dive into the intricacies of managing a music band. Discover effective strategies for scheduling, promotion, and teamwork to ensure a cohesive and successful musical journey." },
        { id: 3, title: "Guitar Mastery Workshop", instructor: "Alex Johnson", description: "Elevate your guitar playing skills with this intensive workshop. Covering advanced techniques, scales, and styles, this course is designed to transform you into a versatile and skilled guitarist." },
        { id: 4, title: "Songwriting Fundamentals", instructor: "Emily Davis", description: "Unleash your creativity with the art of songwriting. Learn the basics of lyricism, melody construction, and song structure to express your musical ideas with impact and emotion." },
        { id: 5, title: "Live Performance Techniques", instructor: "Chris Rodriguez", description: "Master the art of live music performance. From stage presence to crowd engagement, this course provides insights into delivering unforgettable performances and connecting with your audience." },
        { id: 6, title: "Electronic Music Production", instructor: "Mia Williams", description: "Delve into the world of electronic music creation. Explore synthesizers, beat-making, and digital audio workstations to craft electronic tracks that resonate with contemporary music trends." },
    ];

    const coursesList = document.getElementById("courses-list");

    courses.forEach(course => {
        const courseElement = document.createElement("div");
        courseElement.className = "course";
        courseElement.innerHTML = `
            <h2>${course.title}</h2>
            <p>Instructor: ${course.instructor}</p>
            <p>Description: ${course.description}</p>
            <button class="enroll-button" onclick="enroll(${course.id}, '${course.title}')">Enroll</button>
        `;
        coursesList.appendChild(courseElement);
    });

    window.enroll = function (courseId, courseTitle) {
        document.getElementById("courseTitle").innerText = courseTitle;
        openModal("purchaseModal");
    };

    function openModal(modalId) {
        document.getElementById(modalId).style.display = "block";
    }

    function closeModal(modalId) {
        document.getElementById(modalId).style.display = "none";
    }

    window.completePurchase = function () {
        alert("Purchase completed!");
        closeModal("purchaseModal");
    };

    window.openLoginModal = function () {
        openModal("loginModal");
    };

    window.closeLoginModal = function () {
        closeModal("loginModal");
    };

    window.submitLoginForm = function (event) {
        event.preventDefault();
        // Add your login logic here (validate credentials, make API call, etc.)
        // For demonstration purposes, let's assume successful login
        alert("Login successful!");
        // Redirect to index2.html after successful login
        window.location.href = "index2.html";
        // You may perform other actions after successful login if needed
        closeLoginModal();
    };

    window.createAccount = function () {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const cardNumber = document.getElementById("cardNumber").value;
        const expiryDate = document.getElementById("expiryDate").value;
        const cvv = document.getElementById("cvv").value;

        if (!username || !email || !password || !cardNumber || !expiryDate || !cvv) {
            alert("Please fill in all fields.");
            return false;
        }

        alert(`Account created!\nUsername: ${username}\nEmail: ${email}`);

        return false;
    };

    window.getModules = function () {
        const courseId = document.getElementById("courseId").value;

        // Validate the input (you may add more validation as needed)
        if (!courseId) {
            alert("Please enter a valid course ID.");
            return false;
        }

        // Simulate fetching modules from the server (replace with actual API call)
        const modules = fetchModulesFromServer(courseId);

        // Display the retrieved modules (you may format and display them as needed)
        displayModules(modules);

        return false;
    };

    // Simulated function to fetch modules from the server (replace with actual API call)
    function fetchModulesFromServer(courseId) {
        // This is a placeholder. In a real-world scenario, you would make an API call to fetch the modules.
        // For demonstration purposes, let's assume a static set of modules.
        if (courseId === "MP101-ABC123") {
            return {
                video: "Video URL for Music Production 101",
                pdf: "PDF URL for Music Production 101",
                homework: "Homework Assignment for Music Production 101"
            };
        } else {
            return {}; // Return an empty object for unknown course IDs
        }
    }

    // Function to display modules (you may format and display them as needed)
    function displayModules(modules) {
        const moduleContent = document.getElementById("moduleContent");
        moduleContent.innerHTML = `
            <h3>Modules for ${document.getElementById("courseId").value}</h3>
            <p>Video: <a href="${modules.video}" target="_blank">Watch Video</a></p>
            <p>PDF: <a href="${modules.pdf}" target="_blank">View PDF</a></p>
            <p>Homework Assignment: <a href="${modules.homework}" target="_blank">Download Assignment</a></p>
        `;
    }

    window.getModules = function () {
        const courseId = document.getElementById("courseId").value;

        // Validate the input (you may add more validation as needed)
        if (!courseId) {
            alert("Please enter a valid course ID.");
            return false;
        }

        // Simulate fetching modules from the server (replace with actual API call)
        const modules = fetchModulesFromServer(courseId);

        // Display the retrieved modules in lecture.html
        displayModulesInLecture(modules);

        // Redirect to lecture.html
        window.location.href = "lecture.html";

        return false;
    };

    // Simulated function to fetch modules from the server (replace with actual API call)
    function fetchModulesFromServer(courseId) {
        // This is a placeholder. In a real-world scenario, you would make an API call to fetch the modules.
        // For demonstration purposes, let's assume a static set of modules.
        if (courseId === "MP101-ABC123") {
            return {
                video: "Video URL for Music Production 101",
                pdf: "PDF URL for Music Production 101",
                homework: "Homework Assignment for Music Production 101"
            };
        } else {
            return {}; // Return an empty object for unknown course IDs
        }
    }

    // Function to display modules in lecture.html
// Function to display modules in lecture.html
function displayModulesInLecture(modules) {
    const lectureContent = document.getElementById("lectureContent");
    lectureContent.innerHTML = `
        <h3>Modules for ${document.getElementById("courseId").value}</h3>
        <p>Video: <a href="${modules.video}" download="video.mp4">Watch Video</a></p>
        <p>PDF: <a href="${modules.pdf}" download="document.pdf">View PDF</a></p>
        <p>Homework Assignment: <a href="${modules.homework}" download="homework.txt">Download Assignment</a></p>
    `;
}

});

document.addEventListener("DOMContentLoaded", function () {
    // ... (your existing code) ...

    window.submitLoginForm = function (event) {
        event.preventDefault();
        
        // Add your login logic here (validate credentials, make API call, etc.)
        // For demonstration purposes, let's assume successful login
        const username = document.getElementById("username").value;
        sessionStorage.setItem('loggedInUser', username);

        alert("Login successful!");
        // Redirect to index2.html after successful login
        window.location.href = "index2.html";
        // You may perform other actions after successful login if needed
        closeLoginModal();
    };

    // ... (other functions) ...
});

document.addEventListener("DOMContentLoaded", function () {
    // ... (your existing code) ...

    window.getModules = function () {
        // Redirect to lecture.html
        window.location.href = "lecture.html";
        return false;
    };
    
    // ... (other functions) ...
});
