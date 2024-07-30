SHOW DATABASES;
<!-- TO show all the databases available on your system -->

USE <Name of DB>;
<!-- to use the specific database -->

CREATE DATABASE <NAME>;
<!-- to create a new database -->

SHOW TABLES;
<!-- to list down all the tables of a particular database -->

CREATE TABLE <NAME>(
    <column name 1> [datatype] <constraint>,
    <column name 2> [datatype],
    .
    .
);
<!-- to create the new tables -->

desc <table name>;
<!-- to see the description of the table -->

insert into <table name>(col1,col2,...) values(<value1>, <value2>, ...);
<!-- to insert values in the table -->

select <column name> from <table name>;
<!-- to see the column content -->

select * from <table name>;
<!-- to see all data -->

select * from <table name> where {conditions ...}
<!-- condition -> to select the specific data of the table -->

delete from <table name> where {conditions....};
<!-- to delete the content of the data -->

update <table name> set <column 1> = value 1 where {conditions.}
<!-- to update the data of a column -->

alter table <table name> change <old column name> <new column name> [new constraints];
<!-- to alter the structure of the table -->

alter table <table name> drop <column name>;
<!-- to drop the column from the table -->

select <column name > as <new column name> from <table name>;
<!-- to get the data in human readable manner -->

select concat (column 1 ," " , column 2) as <new name> from <table name>;
<!-- to concatenate two columns like first name and last name -->

select distinct <column name > from <table name>;
<!-- to select the distinct data -->

select count(*) as <column name> from <table name> where {conditions ..}
<!-- to count the number of data related to the conditions given -->

select avg(<column name>) as <human readable> from <table name > where {conditions..}
<!-- min,max,sum..... -->

select <column name>, count(*) from <table name> group by <column name> having {conditions ...};
<!-- to count like how many people are in general and obc which are the values of caste -->



