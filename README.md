<body style="scroll-behavior:smooth;transition:.5s;"></body>
<html style="transition:.5s"></html>
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
        <img src="media/calculator-main.png" alt="drawing" width="250" height="375px"/>
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
<h2>Create your Version</h2>

<h4>Clone Repository</h4>
<code style="color:ghostwhite;background:#000;padding: .25rem .5rem;">git clone https://github.com/kylestech95/interactive/interactive-calculator.git</code>

<h4>Install Node Packages</h4>
<img src="media/nodejs.jpeg" style="height:150px; width:150px;border-radius:50%;box-shadow: 0 0 11px .26px ghostwhite;"/>
<div style="width:50%;display:flex;
flex-direction:column;">
<code style="color:ghostwhite;background:#000;padding: .25rem .5rem;">npm install -y</code>
or
<code style="color:ghostwhite;background:#000;padding: .25rem .5rem;">npm install</code>
or
<code style="color:ghostwhite;background:#000;padding: .25rem .5rem;">npm i</code>
</div>

<h4>Import & configure Database</h4>
<img src="media/pgsql.png" style="height:150px; width:150px;border-radius:50%;box-shadow: 0 0 11px .26px ghostwhite;"/>
<p>If you do not have postgresql on your system, download postgres here:<br>
<a href="https://www.postgresql.org/download/">Postgres Downloads</a>
</p>

<h4>import database from .sql file</h4>
<p>Before importing database, ensure that a database is created within your local postgres environemnt</p>
<div style="width:80%;display:flex;
flex-direction:column;">
Create Database:
<code style="color:ghostwhite;background:#000;padding: .25rem .5rem;">CREATE DATABASE [database];</code>
Example: <code style="color:ghostwhite;background:#000;padding: .25rem .5rem;">CREATE DATABASE calculator;</code>
</div>
</div>
<br>

<div style="width:80%;display:flex;
flex-direction:column;">
Import:
<code style="color:ghostwhite;background:#000;padding: .25rem .5rem;">psql -U [username] [database] < calculator.sql</code>
Example: <code style="color:ghostwhite;background:#000;padding: .25rem .5rem;">psql -U jondoe calculator < calculator.sql</code>
</div>
</div>
<h4>Connect database to the server</h4>


</div>


<div id="license">license Section</div>
<div id="contact">contact Section</div>
