### RESEARCH & EXPLANATION ###
My Thesis is similar to my Competency project as to the user experience. But the new app uses mySQL as opposed to MongoDB, and mysql connection/query module instead of mongoose. In addition the first project is built with Class Components and React@16 and an older react-router. The new app is built with functions and hooks, with the newest react modules we have available.
I chose mySQL fist because I am interested in a Database Adminstration for a career, and second for the challenge. Where the mongo is non-relational and uses the object/collection schemas, mySQL is relational and uses tables with columns and rows.
Learning the new syntax is critical and key to its use, as the very name of mySQL declares the character of its purpose (“Structured Query Language”). Once I became slightly familiar with it parts and ways(very slightly), I began to explore its potential use in my app. 
The first thing I found with adding mySQL to my app was that the schemas were located in the database itself and structured as tables insead of models set up in the app itself. After working with mongo for months now this was a bit of a curve, but with determination, the canvas and the outdated stack overflow - I was able to understand enough to tackle the quest.
A pleasing tool in my efforts I have found is the MySQL Workbench: something we do not have as an equivelant in here for mongo...it makes all the difference as I am able to test queries and manipulate data on the desktop before adding them to the app. I did not find any documentation for using mySQL with React but the more I learned the more I could not see any reason it should not work. The main difference on the server side was no models and schemas. Most of the work was with the controllers and the queries. I actually liked the differences and how mySQL acts as opposed to mongo but I'm sure as my experience launches to the outside world I will begin to learn hands on reasons why I will use or recommend one over the other.  For now I will sum up my comparisons:
mySQL language: deep, vast, not so forgiving but lots of specific detailed actions
Mongo: if you know javascript - not so complicated, very forgiving, quite simple really.

wikipedia says:
********************
Relational database
A relational database is a digital database whose organization is based on the relational model of data, as proposed by E. F. Codd in 1970.[1] The various software systems used to maintain relational databases are known as a relational database management system (RDBMS). Virtually all relational database systems use SQL (Structured Query Language) as the language for querying and maintaining the database.

Relational model
Main article: Relational model
This model organizes data into one or more tables (or "relations") of columns and rows, with a unique key identifying each row. Rows are also called records or tuples.[2] Generally, each table/relation represents one "entity type" (such as customer or product). The rows represent instances of that type of entity (such as "Lee" or "chair") and the columns representing values attributed to that instance (such as address or price).

Keys
Each row in a table has its own unique key. Rows in a table can be linked to rows in other tables by adding a column for the unique key of the linked row (such columns are known as foreign keys). Codd showed that data relationships of arbitrary complexity can be represented by a simple set of concepts.

Part of this processing involves consistently being able to select or modify one and only one row in a table. Therefore, most physical implementations have a unique primary key (PK) for each table. When a new row is written to the table, a new unique value for the primary key is generated; this is the key that the system uses primarily for accessing the table. System performance is optimized for PKs. Other, more natural keys may also be identified and defined as alternate keys. Often several columns are needed to form an AK (this is one reason why a single integer column is usually made the PK). Both PKs and AKs have the ability to uniquely identify a row within a table. Additional technology may be applied to ensure a unique ID across the world, a globally unique identifier, when there are broader system requirements.

The primary keys within a database are used to define the relationships among the tables. When a PK migrates to another table, it becomes a foreign key in the other table. When each cell can contain only one value and the PK migrates into a regular entity table, this design pattern can represent either a one-to-one or one-to-many relationship. Most relational database designs resolve many-to-many relationships by creating an additional table that contains the PKs from both of the other entity tablesâthe relationship becomes an entity; the resolution table is then named appropriately and the two FKs are combined to form a PK. The migration of PKs to other tables is the second major reason why system-assigned integers are used normally as PKs; there's seldom efficiency nor clarity in migrating a bunch of other types of columns.

Relationships
Relationships are a logical connection between different tables, established on the basis of interaction among these tables.

***************************
wikipedia also says:
"A NoSQL (originally referring to "non SQL", "non relational" or "not only SQL")[1] database provides a mechanism for storage and retrieval of data which is modeled in means other than the tabular relations used in relational databases. Such databases have existed since the late 1960s, but did not obtain the "NoSQL" moniker until a surge of popularity in the early twenty-first century,[2] triggered by the needs of Web 2.0 companies such as Facebook, Google, and Amazon.com.[3][4][5] NoSQL databases are increasingly used in big data and real-time web applications.[6] NoSQL systems are also sometimes called "Not only SQL" to emphasize that they may support SQL-like query languages.[7][8]"

# On-Serve! mySQL #

ON-SERVE (with mySQL) is a full-stack application for tracking warranty service tickets: It uses 'express' & 'mysql' on the server side to serve up table data from mySQL then route, access and manipulate the data using controller queries in response to requests from the client side: in this app mySQL(sha2 is used to hash passwords) & 'jsonwebtoken' to authenticate users password encryption and a server issued web token which the client will pass back through the header for user session auth.

It uses 'react' & 'react-dom' for frontend client ui and page/component rendering and 'react-router-dom' for page routing framework. It also uses 'axios' for api component CRUD data routing to and from the server controllers which do the actual touch processes with mySQL via mysql connection queries. Bootstrap is utilized for styling along with some linked css.

## Installation ##

You will need a mySQL instance running on your local machine
Open a terminal from the app root folder and run the following schema.sql file to seed our database: mySQL root user password is blank by default (use yours if set)

```shell
/usr/local/mysql/bin/mysql -u root -p < schema.sql
```
If successful you will get no errors and the onserve schema will now be present in your mySQL instance

On-Serve must have the package.json dependencies installed before it will run.
There may be versioning messages and warnings, they can be ignored
The following steps can be run from the same terminal at app root folder =>

```shell
cd client; <Change to the client directory>
npm i; <Load its dependencies>
cd ..; <Go back>
cd server; <Change to the server directory>
npm i; <Load its dependencies>
npm run app <Start the app from server folder>
```
The server and the client will start using the concurrently app script in the server package.json file.

### Client Side Usage ###

This app serves appliance technicians with service jobs using a ticket tracking system. At the home page the options are to register, login or view currently new tickets which upon login would be available to a registered technician for claiming.  Once a ticket is claimed it will be given the current date and time for the Assigned value, and it will assign it to the logged in user. The technicians open tickets with have a text area for adding job notes before closing a ticket. When closed the ticket status will be updated to closed and be stamped with the current date and time. The only way to delete a ticket is to be logged in as admin(see below).



The follwoing table shows the various information available on a ticket depending on the login status:

    not logged in                 logged in user                 logged in admin
************************************************************************************
shows only new tickets    : shows new tickets under          : shows all tickets
with location, appliance  : claim new tickets, with          : with a delete button
and issue                 : a button to claim the            :
                          : ticket. Also shows ticket        :
                          : list owned by logged in          :
                          : user and status, 'open' or       :
                          : 'closed'. If open there will     :
                          : be a text box for adding notes   :
                          : and a button for closing the     :
                          : ticket. Once closed the status   :
                          : will be updated to closed, and   :
                          : any provided notes will be added :
                          : to the notes field.              :


#### ATTENTION ####

There is an admin user seeded in this app for the purpose of deleting tickets. The admin user is the only user with the ability to actually delete a ticket.

login info:

email: admin@onserve.com
password: admin

# Resources #
TLM Canvas, starter projects, example code, DevDocs, MDN, Wikipedia, various books provided by TLM curriculum and class facilitator...
