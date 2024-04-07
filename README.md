<body style="scroll-behavior:smooth;transition:1.25s;"></body>
<html style="transition:1.25s"></html>
<!--title -->
<div style="text-align:center;
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;">
<h1 style="background:#000;padding:.25rem .5rem;border-radius:12px;color:ghostwhite;">Interactive Calculator</h1>
</div>
<!-- calculator gif-->
<img src="media/calculator-gif.gif" alt="drawing" width="80%" height="150px"/>
<div>
    <h3 style="text-decoration:underline">Table of Contents</h3>
</div>
<ol style="width:100%;">
<li><a style="color:ghostwhite;text-decoration:none" href="#about">About the Project</a></li>
<li><a style="color:ghostwhite;text-decoration:none" href="#usage">Usage</a></li>
<li><a style="color:ghostwhite;text-decoration:none" href="#fork">Fork</a></li>
<li><a style="color:ghostwhite;text-decoration:none" href="#license">License</a></li>
<li><a style="color:ghostwhite;text-decoration:none" href="#contact">Contact</a></li>
</ol>

<div id="about" style="margin-top:1rem">
<h2 style="background:#fff;padding:.25rem .5rem;border-radius:12px;color:#000;">About the Project</h2>
<!-- calculator img -->
    <div style="display:flex;
    width:100%;
    flex-direction: column;
    align-items:center;
    justify-content: center;">
        <img src="media/calc-color-gif.gif" alt="drawing" width="250" height="375px"/>
       <p style="font-size:16px;margin-top:1rem;line-height:1.25rem">Imagine working with a calculator where one can look back on recently-used equations & results.
This component does exactly that!</p>

<p style="font-size:16px;margin-top:1rem;line-height:1.25rem">We have a calculator designed with custom <b><em>HTML</em></b> elements & <b><em>CSS</em></b> styles. The elements are manipulated with <b><em>JavaScript</em></b>, which include server requests with <b><em>AJAX.</em></b></p>

<p style="font-size:16px;margin-top:1rem;line-height:1.25rem">Unless the result is <b><em>undefined</em></b>, true evaluations will route to a <b><em>Postgresql</em></b> database.
Finally a clearing(CLR) function truncates(removes) all data from the database.</p>
</div>

<h3><em>Languages & Tools:</em></h3>
<h4>Frontend</h4>
<ul style="margin-top:-1.25rem;">
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
</ul>

<h4>Backend</h4>
<ul style="margin-top:-1.25rem;">
<li>NodeJs</li>
<li>Postgres</li>
<li>AJAX</li> 
</div>
</div>


<div id="usage" style="margin-top:1rem">
<h2 style="background:#fff;padding:.25rem .5rem;border-radius:12px;color:#000;">Usage</h2>

<h3>Usage Breakdown</h3>
<ul style="margin-top:-1.25rem;">
<li>Operations: +, -, /, x</li>
<li>=/ENTER: post result</li>
<li>0-9: type integers on keydown</li>
<li>AC: clear current equation</li>
<li>CLR: clear history of calculated results</li>
<li>NEG: turn a number into a positive number integer negative</li>
<li>DELETE: delete value from input (1 value at a time)</li>
<li>Left Arrow Key: scroll recent values left</li>
<li>Right Arrow Key: scroll recent values right</li>




</ul>

<h4>POST</h4>
<img src="media/calculator-post.gif" alt="drawing" width="250" height="375px"/>
<div><em>post calculated data to the database</em>
</div>
<h4>GET</h4>
<img src="media/calculator-get.gif" alt="drawing" width="250" height="375px"/>
<div><em>retrieve calculated data from the database</em></div>

</div>




<div id="fork">
<h2 style="background:#fff;padding:.25rem .5rem;border-radius:12px;color:#000;">Create your Version</h2>

<h4>Clone Repository</h4>
<code style="color:ghostwhite;background:#000;padding: .25rem .5rem;">git clone https://github.com/kylestech95/interactive/interactive-calculator.git</code>

<h4>Install Node Packages</h4>
<img src="media/nodejs.jpeg" style="height:150px; width:150px;border-radius:50%;box-shadow: 0 0 11px .26px ghostwhite;"/>
<div style="width:50%;display:flex;
flex-direction:column;">
<p>If NodeJS is not on your system, download NodeJS here:<br>
<a href="https://nodejs.org/en/download">NodeJS Downloads</a>
</p>
<code style="color:ghostwhite;background:#000;padding: .25rem .5rem;">sudo apt-get update</code>
<code style="color:ghostwhite;background:#000;padding: .25rem .5rem;margin-top:.25rem;">sudo apt-get upgrade</code>
and 
<code style="color:ghostwhite;background:#000;padding: .25rem .5rem;">npm install -y</code>
or
<code style="color:ghostwhite;background:#000;padding: .25rem .5rem;">npm install</code>
or
<code style="color:ghostwhite;background:#000;padding: .25rem .5rem;">npm i</code>
</div>

<h4>Import & configure Database</h4>
<img src="media/pgsql.png" style="height:150px; width:150px;border-radius:50%;box-shadow: 0 0 11px .26px ghostwhite;"/>
<p>If postgresql is not on your system, download postgres here:<br>
<a href="https://www.postgresql.org/download/">Postgres Downloads</a>
</p>

<h4 id="import">import database from .sql file</h4>
<p>Before importing database, ensure that a database is created within your local postgres environemnt</p>
<div style="width:50%;display:flex;
flex-direction:column;">
Enter local Database from terminal:
<code style="color:ghostwhite;background:#000;padding: .25rem .5rem;">psql -U postgres</code>
Create Database:
<code style="color:ghostwhite;background:#000;padding: .25rem .5rem;">CREATE DATABASE [database];</code>
Example: <code style="color:ghostwhite;background:#000;padding: .25rem .5rem;">CREATE DATABASE calculator;</code>
</div>
</div>
<br>

<div style="width:80%;display:flex;
flex-direction:column;">
Import <code style="margin:0;padding:0;width:140px;">calculator.sql</code> into database:
<code style="color:ghostwhite;background:#000;padding: .25rem .5rem;">psql -U [username] [database] < calculator.sql</code>
Examples: <code style="color:ghostwhite;background:#000;padding: .25rem .5rem;margin-bottom:.5rem;">psql -U postgres calculator < calculator.sql</code>
<code style="color:ghostwhite;background:#000;padding: .25rem .5rem;">psql -U jondoe calculator < calculator.sql</code>
</div>
</div>
<h4>Connect database to the server</h4>
<p>After importing the calculator database, you have the option to <b>plug-in</b> database information within <code style="margin:0;padding:0;width:140px;">server/db.js</code> for the public to see <em>or</em> create a <code style="margin:0;padding:0;width:125px;">.env</code> file to securely <b>plug-in</b> database information & store them into variables <b style="text-decoration:underline">(recommended)</b>.</p>
<p style="margin-top:.05rem;">The project file, <code>package.json</code>includes a dependency called <b id="dotenv">dotenv</b>.<br>
Within the <code>db.js</code> file or similar version, include <b>dotenv</b> at the top of the file.<br>
At this point, the <b>.env</b> environment variables should be read by the server and stored as <code>process.env.VAR</code> variables.<br>
<em>type: commonjs</em><br>
<code>require("dotenv").config()<br>
</code>
<em style="margin-top:.25rem">type: module</em><br>
<code>import "dotenv/config"<br>
</code>
</p>.
<p style="margin-top:.05rem;text-decoration:underline">The process.env.VAR schema can be viewed in <code style="margin:0;padding:0;width:100px;">db.js</code> & below:</p>

<code style="text-align:center;background:#000;color:gold;">

const pool = new Pool({<br>
    user: process.env.DBU,<br>
    database: process.env.DB,<br>
    password: process.env.PD,<br>
    port: process.env.DBP,<br>
    host:process.env.DBH,<br>
    ssl:{<br>
        rejectUnauthorized: false,<br>
    }<br>
})

</code>

<h4 id="sequelize">Finally, comment out all sequelize instances in <code>db.js:</code></h4><br>
<code style="text-align:center;background:#000;color:gold; margin-top:.5rem">

const { Sequelize } = require('sequelize')

//     const sequalize = new Sequelize(process.env.DB_URI,<br>
//         {dialect:"sqlite",<br>
//          storage:"./database.sqlite",<br>
//          logging:false,<br>
//         })<br>
//         sequalize.sync().then(()=>{<br>
//             console.log('you are connected to pg')<br>
//         }).catch(err=>console.log(err))

</code>
<h4>Sequelize will not be needed for running the database locally.</h4>
<h4>...but if you are curious, read below:</h4><br>


<p>Sequelize is an <em>Object Relational Mapper</em> which makes it easier to handle databases locally and externally. Currently, if one is to run the server with the sequelize instance, an error would occur because a URI is probably not set. My URI has been setup with <b><a href="render.com" style="text-decoration:none;">Render.com</a></b><br style="margin-bottom:.25rem;">
Both Internal & external URI tempalates for postgres is below:<br><br>
Internal Database URL format:<br>
<code style="margin-top:.5rem;">postgres://[username]:[password]@[hostname]/[database]</code><br>
External Database URL format:<br>
<code >postgres://[username]:[password]@[hostname].[domin_name].com/[database]</code>.
<br><br>
Internal Database URL example:<br>
<code style="margin-top:.5rem;">postgres://jondoe:4f%^3dgtju7%#22cDESz@example123/calculator</code><br>
External Database URL example:<br>
<code>postgres://jondoe:4f%^3dgtju7%#22cDESz@example123.com/calculator</code>.
</p>

<em><p>For more information on sequelize, <a href="https://sequelize.org/docs/v6/getting-started/">view the docs</a></p></em>

</div>

<h3>Execution</h3>
<p style="text-decoration:underline">At this point:</p>
<ol>
<li>Postgres is installed & the <code>.sql</code> file is <a href="#import" style="text-decoration:none"><b>imported</b></a> into your newly created database (calculator)</li>
<li>Your database is plugged into the <code>db.js</code> file publically or securely(recommended - <a href="#dotenv"><b>dotenv</b></a>)</li>
<li>All <a href="#sequelize"><b>sequelize</b></a> instances are commented to run the project locally.</li>
</ol>

<h4>Run your Project</h4>
<p>Within the project folder <b>interactive-calculator</b>, or a renamed version, access the terminal and type:<br><code>npm run dev</code></p>

<h3>Happy Forking</h3>



<h2 style="background:#fff;padding:.25rem .5rem;border-radius:12px;color:#000;">License</h2>
<p>Distributed under the MIT License. See <code>LICENSE.txt</code> for more information.
</p>