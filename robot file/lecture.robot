*** Settings ***
Library     SeleniumLibrary

*** Variables ***
${BROWSER}    chrome
${URL}        http://localhost:5500/enroll/index.html
${URL2}        http://localhost:5500/enroll/Modules.html
${CODE}       GtSWVU8n
${DELAY}      0.5

*** Test Cases ***
Open and Maximize Browser
    Open Browser  ${URL}  ${BROWSER}  options=add_experimental_option("excludeSwitches", ["enable-logging"])
    Maximize Browser Window
    Set Selenium Speed  ${DELAY}

Enroll in Course
    Click Button  Enroll

Purchase Course
    Click Button  Complete Purchase

Go to Modules Page
        Handle Alert  action=ACCEPT
    Click Button  Go to Modules

Input Enrollment Code
    Open Browser  ${URL2}  ${BROWSER}  options=add_experimental_option("excludeSwitches", ["enable-logging"])
    Input Text  id=courseId  ${CODE}
    Click Button  Get Modules

Go to Lecture Page
    Click Link  Go to Lecture

Download Lecture Files
    Click Link  Download PDF
    Click Link  Download Homework

Close Browser
    Close Browser
