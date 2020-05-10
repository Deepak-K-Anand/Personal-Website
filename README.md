# 🌐 Personal Website
Source code behind the website [dkanandbio.web.app](https://dkanandbio.web.app)
![dkanandbio-web-app](https://user-images.githubusercontent.com/3683725/81492436-3db17f80-92b5-11ea-9b77-c0a7f48d1221.png)

## 🛠️ How is it built
The database is served from **Firebase** and the front-end is built using **Lightning Web Components OSS** (_lwc.dev_)

## 🖌️ CSS Framework
The styling (grid system, timeline, meters and avatar) is implemented using **Spectre.css**

## ⚡ LWC Components
Each section is a Lightning Web Component namely:
1.  HEADER
2.  EXPERIENCE
3.  INDUSTRY EXPERIENCE
4.  SKILLS
5.  EDUCATION
6.  ACHIEVEMENTS
7.  STRENGTHS
8.  CERTIFICATIONS
9.  SOCIAL MEDIA
10. AWARDS
11. VOLUNTEERING
12. PRODUCTS

## 💾 Data Flow
Here is a brief outline of how the Data Flows:
1.  The `APP` component (https://github.com/Deepak-K-Anand/Personal-Website/blob/master/src/modules/resume/app/app.js) uses the Firebase Web SDK to query the entire `JSON document` from the Firebase Server
2.  This entire JSON document is then passed as an attribute to all the child components

## 💬 Interactive Chat
![image](https://user-images.githubusercontent.com/3683725/81493132-7eac9280-92bb-11ea-8ddb-ceb02664de3f.png)

The interactive Chat Widget is built using the Open Source Conversational Chat Form Framework - https://space10-community.github.io/conversational-form/
