<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
    xmlns:html="http://www.w3.org/TR/REC-html40"
    xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>XML Sitemap Reader — Farul Wananda</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #09090b;
            color: #e4e4e7;
            line-height: 1.5;
            padding: 3rem 1.5rem;
          }
          .container {
            max-width: 960px;
            margin: 0 auto;
          }
          .header {
            margin-bottom: 2rem;
            padding-bottom: 1.5rem;
            border-bottom: 1px solid #27272a;
          }
          .nav-back {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            font-size: 0.8rem;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;
            color: #a1a1aa;
            text-decoration: none;
            margin-bottom: 1rem;
            transition: color 0.15s ease;
          }
          .nav-back:hover { color: #ffffff; }
          h1 {
            font-size: 1.85rem;
            font-weight: 700;
            letter-spacing: -0.025em;
            color: #ffffff;
            margin-bottom: 0.5rem;
          }
          .subtitle {
            font-size: 0.9rem;
            color: #a1a1aa;
            line-height: 1.6;
            max-width: 720px;
          }
          .stats-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            flex-wrap: wrap;
            margin: 1.5rem 0 1rem 0;
            padding: 0.75rem 1rem;
            background: #18181b;
            border: 1px solid #27272a;
            border-radius: 8px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;
            font-size: 0.75rem;
            color: #a1a1aa;
          }
          .badge {
            display: inline-block;
            padding: 0.15rem 0.45rem;
            border-radius: 4px;
            font-size: 0.72rem;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;
            background: #27272a;
            border: 1px solid #3f3f46;
          }
          .badge-high { color: #ffffff; font-weight: 700; }
          .badge-med { color: #d4d4d8; font-weight: 500; }
          .badge-low { color: #a1a1aa; font-weight: 400; }
          .table-wrapper {
            background: #18181b;
            border: 1px solid #27272a;
            border-radius: 8px;
            overflow-x: auto;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.82rem;
            text-align: left;
          }
          th {
            padding: 0.75rem 1rem;
            background: #27272a;
            color: #a1a1aa;
            font-weight: 600;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border-bottom: 1px solid #3f3f46;
          }
          td {
            padding: 0.75rem 1rem;
            border-bottom: 1px solid #27272a;
            vertical-align: middle;
          }
          tr:last-child td { border-bottom: none; }
          tr:hover td { background-color: #27272a; }
          a.url-link {
            color: #e4e4e7;
            text-decoration: none;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;
            word-break: break-all;
            transition: color 0.15s ease;
          }
          a.url-link:hover { color: #38bdf8; text-decoration: underline; }
          .text-muted { color: #71717a; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace; font-size: 0.75rem; }
          .footer {
            margin-top: 2rem;
            text-align: center;
            font-size: 0.75rem;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;
            color: #71717a;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <a href="/sitemap" class="nav-back">
              <span>← Open HTML Visual Sitemap Directory</span>
            </a>
            <h1>XML Sitemap Reader</h1>
            <p class="subtitle">
              Interactive XML stylesheet view of the sitemap for <strong>farulwananda.dev</strong>. Search engines parse this document to discover and index all content.
            </p>
            <div class="stats-bar">
              <div>
                <span>Total URLs Indexed: </span>
                <strong style="color: #ffffff;"><xsl:value-of select="count(s:urlset/s:url)"/></strong>
              </div>
              <div>
                <span>Standard: </span>
                <strong style="color: #ffffff;">sitemaps.org 0.9</strong>
              </div>
              <div>
                <a href="/sitemap" style="color: #38bdf8; text-decoration: none;">Interactive HTML Sitemap</a>
                <span style="margin: 0 0.5rem; color: #52525b;">•</span>
                <a href="/" style="color: #38bdf8; text-decoration: none;">Portfolio Home</a>
              </div>
            </div>
          </div>

          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th style="width: 45px;">#</th>
                  <th>URL Location</th>
                  <th style="width: 90px;">Priority</th>
                  <th style="width: 110px;">Frequency</th>
                  <th style="width: 120px;">Lastmod</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="s:urlset/s:url">
                  <tr>
                    <td class="text-muted"><xsl:value-of select="position()"/></td>
                    <td>
                      <a class="url-link">
                        <xsl:attribute name="href">
                          <xsl:value-of select="s:loc"/>
                        </xsl:attribute>
                        <xsl:value-of select="s:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:variable name="p" select="s:priority"/>
                      <span class="badge">
                        <xsl:attribute name="class">
                          <xsl:choose>
                            <xsl:when test="$p &gt;= 0.9">badge badge-high</xsl:when>
                            <xsl:when test="$p &gt;= 0.7">badge badge-med</xsl:when>
                            <xsl:otherwise>badge badge-low</xsl:otherwise>
                          </xsl:choose>
                        </xsl:attribute>
                        <xsl:value-of select="s:priority"/>
                      </span>
                    </td>
                    <td class="text-muted">
                      <xsl:value-of select="s:changefreq"/>
                    </td>
                    <td class="text-muted">
                      <xsl:choose>
                        <xsl:when test="s:lastmod">
                          <xsl:value-of select="s:lastmod"/>
                        </xsl:when>
                        <xsl:otherwise>—</xsl:otherwise>
                      </xsl:choose>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>

          <div class="footer">
            <p>© 2026 Farul Wananda • Built with Astro Static Engine</p>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
