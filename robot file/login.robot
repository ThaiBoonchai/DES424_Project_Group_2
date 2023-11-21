*** Settings ***
Library  SeleniumLibrary

*** Variables ***
${BROWSER}  chrome
${URL}      http://localhost:5500/enroll/index.html
${USERNAME}  guy
${PASSWORD}  1234
${DELAY}     0.5

*** Test Cases ***

Open Browser
    Open Browser  ${URL}  ${BROWSER}  options=add_experimental_option("excludeSwitches", ["enable-logging"])
    Maximize Browser Window
    Set Selenium Speed  ${DELAY}

Go to Log In
    Wait Until Page Contains Element  link=Login  timeout=10s
    Click Element  link=Login

Enter Log In Account
    Wait Until Element Is Visible  id=username  timeout=10s
    Input Text  id=username  ${USERNAME}
    Input Text  id=password  ${PASSWORD}
        Click Element   xpath=//button[@onclick="attemptLogin()"]
Close Browser
    Close Browser
