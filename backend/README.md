In this project I have used Postgres SQL for the database and have used Sequelize ORM for quering the data. The relationship between the tables is of one-to-many relation. I have 2 tables 
1. User_Data
2. Post_Info
3. Replies

![Image of my project](./Meteor%20Modeler.png)

Here is the schema of the DB. The tool I sued to generate a sequekize schema is **Meteor Modeler**

User_Data *has-many* Post_Info
User_Data *has-many* Replies
Post *has-many* Replies

