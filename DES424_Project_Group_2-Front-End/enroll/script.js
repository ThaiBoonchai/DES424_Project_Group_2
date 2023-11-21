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


    window.closeModal = function (modalId) {
        document.getElementById(modalId).style.display = 'none';
    };

    window.completePurchase = function () {
        alert("Purchase completed!");
        closeModal("purchaseModal");

        // Redirect to Modules.html
        window.location.href = "purchase.html";
        

    };

    window.openLoginModal = function () {
        openModal("loginModal");
    };

    window.closeLoginModal = function () {
        closeModal("loginModal");
    };

    window.submitLoginForm = function (event) {
        event.preventDefault();

    
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
    
        // Validate input (you may add more validation as needed)
        if (!username || !password) {
            alert("Please enter both username and password.");
            return;
        }
    
        // Send a POST request to the server for authentication
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Check the response from the server
            if (data.success) {
                // Login successful
                alert("Login successful!");
                // Redirect to index2.html after successful login
                window.location.href = "index2.html";
                // You may perform other actions after successful login if needed
                closeLoginModal();
            } else {
                // Login failed
                alert("Invalid username or password");
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            closeLoginModal();
        });
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

});
document.addEventListener("DOMContentLoaded", function () {

    // Array of allowed course IDs and their corresponding lecture pages
    var courseToLectureMap = {
        "GtSWVU8n": "lecture1.html",
        "qEm6BPaQ": "lecture2.html",
        "7sL0jR8r": "lecture3.html",
        "2dURNMTA": "lecture4.html",
        "bwzdAi5r": "lecture5.html",
        "RBFw29Qf": "lecture6.html"
    };

    window.getModules = function () {
        // Get the entered course ID
        var enteredCourseId = document.getElementById("courseId").value;

        // Check if the entered course ID is in the map
        if (courseToLectureMap.hasOwnProperty(enteredCourseId)) {
            // Redirect to the corresponding lecture page
            window.location.href = courseToLectureMap[enteredCourseId];
        } else {
            // Display an error message or handle the rejection in some way
            alert("Invalid Course ID. Please enter a valid Course ID.");
        }

        // Prevent the form from submitting
        return false;
    };

});

document.addEventListener("DOMContentLoaded", function () {
  const purchasedCourses = [
    { id: 1, title: "Music Production 101" , accessCode: "GtSWVU8n"},
    { id: 2, title: "Band Management Strategies" , accessCode: "qEm6BPaQ"},
    { id: 3, title: "Guitar Mastery Workshop" , accessCode: "7sL0jR8r"},
    { id: 4, title: "Songwriting Fundamentals" , accessCode: "2dURNMTA"},
    { id: 5, title: "Live Performance Techniques" , accessCode: "bwzdAi5r"},
    { id: 6, title: "Electronic Music Production" , accessCode: "RBFw29Qf"},
    // Add more courses if needed
  ];

  const purchasedCoursesList = document.getElementById("purchased-courses-list");

  purchasedCourses.forEach(course => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${course.title}</strong> - Access Code: ${course.accessCode}`;
    purchasedCoursesList.appendChild(listItem);
  });
});
document.getElementById("modulesButton").addEventListener("click", function () {
    window.location.href = "Modules.html";
  });
