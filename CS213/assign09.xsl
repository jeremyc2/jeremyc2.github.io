<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match = "studentList">
<html>
    <head>
        <style>
            td {
                border: 1px solid gray;
                text-align: center;
            }
            h4 {
                color: red;
            }
        </style>
        <title>Style Sheet for the list of Students</title>
    </head>
    <body>
        <h1>Student List</h1>
        <xsl:apply-templates />
    </body>
</html>
</xsl:template>
    
<xsl:template match = "student">
    <h2>
        Student
        <xsl:value-of select="name/first" />
    </h2>
    <xsl:apply-templates />
</xsl:template>
