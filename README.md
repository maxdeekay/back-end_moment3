<h1>REST API för moment 3 i kursen DT207G</h1>
Detta repository innehåller ett enklare REST API för att sköta lagring och hantering av arbetserfarenheter i en MongoDB-databas.

<h2>Användning</h2>
Nedanför kommer en beskrivning på hur man kan använda sig av APIet:
<br>
<br>
<table>
  <tr>
    <th>Metod</th>
    <th>Ändpunkt</th>
    <th>Beskrivning</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>/experiences</td>
    <td>Hämta arbetserfarenheter</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/experiences</td>
    <td>Lägg till arbetserfarenhet</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>/experiences/:id</td>
    <td>Ta bort en arbetserfarenhet</td>
  </tr>
</table>

Arbetserfarenheter kommer i form av JSON-data med följande struktur:
```json
{
  "companyname": "companyname"
  "jobtitle": "jobtitle",
  "location": "location",
  "description": "description"
}
```
