document.addEventListener("DOMContentLoaded", function () {
    const purchasedCourses = [
        { id: 1, title: "Music Production 101", accessCode: "MP101-ABC123" },
    ];

    const purchasedCoursesList = document.getElementById("purchased-courses-list");

    purchasedCourses.forEach(course => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${course.title}</strong> - Access Code: ${course.accessCode}`;
        purchasedCoursesList.appendChild(listItem);
    });
});
