// marksheet
// let nam='<br>Name: Uzma Ahmed'
// let roll='<br>Roll Number: JS1-065'
// let teacher='<br>Teacher Name:Miss Shafaq Anees'

// document.write(nam + roll + teacher)
// subject
document.write('<table border =3px>')
let eng=99
let maths=76
let urdu=89
let com=99
let sci=95
document.write('<tr><th>Subject</th><th>Obtained Mark</th><th>Total Mark</th></tr>')
document.write('<tr><td><center>English</td><td>',eng,'</td><td><center>100</td></tr>')
document.write('<tr><td><center>Maths</td><td>',maths,'</td><td><center>100</td></tr>')
document.write('<tr><td><center>Urdu</td><td>',urdu,'</td><td><center>100</td></tr>')
document.write('<tr><td><center>Computer</td><td>',com,'</td><td><center>100</td></tr>')
document.write('<tr><td><center>Science</td><td>',sci,'</td><td><center>100</td></tr>')

// total
let total=eng+maths+urdu+com+sci
document.write('<tr><td><center>Obtained Mark</td><td>',total,'</td><td><center>500</td></tr>')

// percentage
let per= total /500*100
document.write('<tr><td><center>Percentage</td><td>',per,'</td><td><center>Out of 100%</td></tr>')

// grade
if (per>=80)
{grade='A+1'}
else if (per>=70)
{grade='A'}
else if (per>=60)
{grade='B'}
else if (per>=50)
{grade='C'}
else if (per>=40)
{grade='D'}
document.write('<tr><td><center>Grade</td><td>',grade,'</td><td></td></tr>')







