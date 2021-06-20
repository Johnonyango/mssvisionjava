# MSS

#Deployments 


BACKEND - `mssvisionjava`

1. Pull java code using ssh or http github url
   ``https://support.systechafrica.com:8000/root/mssvisionjava.git``
2. Switch to develop branch
3. Run ``mvn clean compile``
4. cd src/main/webapp
5. Create folder `mssvision`

FRONTEND

Requirements
- Install Sencha Cmd v7.3.1.27 or upgrade using sencha upgrade
- Download Sencha Ext packages i.e ext-7.3.1

1. Pull Extjs code using ssh or http github url
2. Checkout develop
3. Run command ``sencha app install ~/pathToExtFramework``
4. Run command ``sencha app build production``
5. Check creation of folder build ie ls
6. Cd ``build/production/MssPhoenix/``

UNDER ONE ROOF PROCEED FROM ABOVE

7. Copy frontend contents to webapp ``cp ./* pathToBackendWebAppFolder/mssvision/ -R``
8. cd java backend folder and run ``mvn clean compile wildfly:deploy``

VOILA!! YOU DONE DEPLOYMENT


##POST-INSTALLATION SQLS
INSERT INTO mss.config (id, created_date, currencyName, currencyShortName, emailFrom, emailHost, emailPassword, emailPort, emailUsername, fmBasePath, fmPassword, fmUsername, middlewarePassword, middlewareUsername, mpesaMiddleWarePath, statusConfig, country, countryCode, businessImage, businessName, numTrials, registrationDeclaration, client, reportServerUrl) VALUES (1, '2021-03-01 22:35:56.000000', 'Kenya Shilling', 'Ksh', 'support@mss.com', 'smtp.gmail.com', 'Admin@123', 587, 'support@mss.com', 'http://129.159.250.225:8082/Xe/api/', 'Admin@123', 'mssuser', null, null, null, 'ACTIVE', 'Kenya', '254', null, 'Systech MSS', 3, 'I hereby declare that the information provided is true and correct. I also understand that any willful dishonesty may render for refusal of this application.', 'OTHERS', 'http://129.159.250.225:8888/jinfonet/tryView.jsp?jrs.report=/Xe');

INSERT INTO landingpagecontent (id, building, country, email, fixedPhone, lat, lng, postalAddress, road, secondaryPhone, town, created_date, loginImage, logo, memberIcon, memberMessage, pensionerIcon, pensionerImage, pensionerMessage, statusConfig, welcomeMessage, whySaveMessage) VALUES (1, 'Mayfair', 'Kenya', 'test@gma.com', '0752635153', -1.2622766, 36.806755, 'Nairobi', 'Parklends', '0831538323', 'Nairobi', '2021-04-22 12:47:52.000000', 518, 0, 0, 'Being a member, means you can now access your pension contribution history', 0, 0, 'Being a member, means you can now access your pension contribution history', 'ACTIVE', 'We are the leader with 25 years of experience
in the Pension Administration market!', 'Do not become a burden to your young ones. Save Now, Live free after retirement.');


INSERT INTO profile (id, loginIdentifier, name) VALUES (2, 'EMAIL', 'MEMBER');
INSERT INTO profile (id, loginIdentifier, name) VALUES (3, 'EMAIL', 'SPONSOR');
INSERT INTO profile (id, loginIdentifier, name) VALUES (4, 'EMAIL', 'PENSIONER');
INSERT INTO profile (id, loginIdentifier, name) VALUES (5, 'EMAIL', 'CRM');
INSERT INTO profile (id, loginIdentifier, name) VALUES (6, 'EMAIL', 'ADMIN');
INSERT INTO profile (id, loginIdentifier, name) VALUES (7, 'EMAIL', 'CRE');

INSERT INTO securityconfig (id, created_date, issuer, tokenValidityMillis, tokenValidityMillisForRememberMe) VALUES (1, '2021-03-03 08:27:18.000000', 'com.systech', 86400, 1314000);

INSERT INTO mailconfig (id, smtp_base_utl, active, smtp_email_from, smtp_host, smtp_password, smtp_port, supportEmail, smtp_username) VALUES (2, 'http://129.159.250.225:8085/mss', true, 'bursting.reports@gmail.com', 'smtp.gmail.com', 'Bursting@123', 587, 'support@systechafrica.com', 'bursting.reports@gmail.com');

INSERT INTO mobilemoneyconfig (id, accountReference, callbackUrl, minAmount, mobileMoneyProcedure, mpesaAppKey, mpesaAppSecret, mpesaPassKey, mpesaPaybill, status, timeoutUrl) VALUES (1, 'Systech Scheme', 'http://129.159.250.225:8085/mss/resources/api/mpesaCallBack', 1, '1.Go to the M-pesa Menu.<br>                                            2.Select Pay Bill.<br>                                            3.Enter Business No. <span><b>654321</b></span>.<br>                                            4.Enter Account No.<span><b>XXXXXX</b></span> (Where XXXXXX is  <b>Member number</b>)<br>                                            5.Enter the Amount.<br>                                            6.Enter your M-Pesa PIN then send. ', 'UrKWUKv4UXEsGdlM7szaJvcDAZ1OrEVN', 'EmAahKmMXZtkKX20', 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919', '174379', 'ACTIVE', 'http://129.159.250.225:8085/mss/resources/api/mpesaTimeoutCallBack');

##MORE

http://localhost:8080/mss/resources/api/authenticate
headers:{
    ContetType:'application/json'
}

{
  "username": "user",
  "password":"user",
  "rememberMe":false
}

http://localhost:8080/mss/resources/api/users
headers:{
    ContetType:'application/json',
    Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzYmU3YWUzZi0wYmM0LTRkNTMtYWM2My1iNjNlYzAzYjVlZjYiLCJzdWIiOiJ1c2VyIiwiaXNzIjoiY29tLnN5c3RlY2gubXNzIiwiaWF0IjoxNjE0NzA4OTkyLCJleHAiOjE2MTQ3OTUzOTJ9.4sFkXjHa5Q-WQc8ZTgaW7NfjCWgpqVdV8yhGjiLZdpA
}

{
  "password": "",
  "id": 0,
  "login": "",
  "email": "",
  "activated": false,
  "langKey": "",
  "fmIdentifier": "",
  "profileId": 1
}