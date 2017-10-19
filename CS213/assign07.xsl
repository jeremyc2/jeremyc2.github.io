<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match = "bsa">
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
        <title>Style Sheet for BSA</title>
    </head>
    <body>
        <h1>BSA</h1>
        <xsl:apply-templates />
    </body>
</html>
</xsl:template>
    
<xsl:template match = "council">
    <h2>
        Council:
        <xsl:value-of select="@name" />
    </h2>
    <xsl:apply-templates />
</xsl:template>
<xsl:template match = "troop">
    <h4>
        Troop: 
        <xsl:value-of select="@troopnumber" />
        <xsl:text>&#160;</xsl:text>
        <xsl:value-of select="@unitname" />    
    </h4>
    <xsl:apply-templates>
        <xsl:sort select="lastname" />
    </xsl:apply-templates>
</xsl:template>
<xsl:template match = "scout">
    <br/>
    <xsl:value-of select="firstname" /> 
    <xsl:text>&#160;</xsl:text>
    <xsl:value-of select="lastname" />
    <table style="border:2px solid black;">
        <tr>
            <th>Phone</th>
            <th>Address</th>
            <th>Merrit Badge</th>
            <th>Rank</th>
        </tr>
        <tr>
            <td><xsl:value-of select="phone"/></td>
            <td><xsl:value-of select="address/street"/><br/>
                <xsl:value-of select="address/city"/><br/>
                <xsl:value-of select="address/state"/><br/>
            </td>
            <td>
                <select>
                    <xsl:for-each select="meritbadge">
                        <xsl:sort select="@date-earned"/>
                        <option style="width:100%;">
                            <xsl:value-of select="."/>
                            <xsl:text>&#160;</xsl:text>
                            <xsl:value-of select="@date-earned"/>
                        </option>
                    </xsl:for-each>
                </select>
            </td>
            <td>
                <select>
                    <xsl:for-each select="rank">
                        <xsl:sort select="@date-earned"/>
                        <option style="width:100%;">
                            <xsl:value-of select="."/>
                            <xsl:text>&#160;</xsl:text>
                            <xsl:value-of select="@date-earned"/>
                        </option>
                    </xsl:for-each>
                </select>
            </td>
        </tr>
    </table>
</xsl:template>
</xsl:stylesheet>
