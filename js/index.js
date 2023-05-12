
console.log ("You index.js file is loaded correctly!");

const about = document.getElementById('about');
const contact = document.getElementById('contact');
const cv = document.getElementById('cv');

about.addEventListener('mouseover', function handleMouseOver()
{about.style.color = '#ff9200';
});

about.addEventListener('mouseout', function handleMouseOut()
{about.style.color = '#a7a7a7';
});

contact.addEventListener('mouseover', function handleMouseOver()
{contact.style.color = '108DA0';
});

contact.addEventListener('mouseout', function handleMouseOut()
{contact.style.color = '#a7a7a7';
});

cv.addEventListener('mouseover', function handleMouseOver()
{cv.style.color = 'C4D957';
});

cv.addEventListener('mouseout', function handleMouseOut()
{cv.style.color = '#a7a7a7';
});