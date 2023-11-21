*** Settings ***
Library     SeleniumLibrary

*** Variables ***
${BROWSER}    chrome
${URL}        http://localhost:5500/enroll/index.html
${DELAY}      0.5

${USERNAME}    TThai
${EMAIL}       T@g.siit.tu.ac.th
${PASSWORD}    1234
${CARD}        1234123412341235
${EXPIRE}      00/00
${CVV}         112

*** Test Cases ***
Open Browser And Go To Login Page
    Open Browser  ${URL}  ${BROWSER}  options=add_experimental_option("excludeSwitches", ["enable-logging"])
    Click Element  link=Login

Navigate To Register Account Page
    Click Element    xpath=//p[contains(text(), "Don't have an account?")]/a

Register Account
    Input Text    id=username       ${USERNAME}
    Input Text    id=email          ${EMAIL}
    Input Text    id=password       ${PASSWORD}
    Input Text    id=cardNumber     ${CARD}
    Input Text    id=expiryDate     ${EXPIRE}
    Input Text    id=cvv            ${CVV}
    Click Element  xpath=//button[@type="submit" and contains(text(), "Create Account")]

Close Browser
    Close Browser

