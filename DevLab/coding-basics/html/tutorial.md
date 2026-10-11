Vocab:
<h>       	=  heading </h>
<p>       	=  paragraph </p> 
<!--      	=  open comment (the statement will not show on website)
-->       	=  close comment (the statement will not show on website)

<img src 	=  Display photos (the element has a special ability to close itself)
alt       	=  "alternate photo explain in case photo error / no show" >

<a        	=  open anchor tag
href>     	=  "http refer link"
target    	=  "_blank"
</a>      	=  close anchor tag 

<ul>	  	=  create unordered List
<li>      	=  list </li>
</ul>     	=  close unordered list tag

<ol>	  	=  create Ordered List / Number list
<li>      	=  become a number list </li>
</ol>     	=  close unordered list tag

<br>		=  break with a line
<title>		=  defines the "title of a document"
<header>	=  specify a header for a document or section
<footer>	=  specify a footer for a document or section


<input type  	=  "fill in the blank form"
		   (the element has a special ability to close itself)
Required	=  add required after input type command or after placeholder
placeholder	=  "display hint input before user fill something">

<form action    =  "submit form to the server or specific url as action attribute">
</form>

<button type	=  "add submit button to a form, it will send to server">
</button>	=  Close button element

------------------------------------------------------------------------------

How to use:

<h1> xxx </h1>
<h2> yyy </h2>
<h3> zzz </h3>
<p> details </p> 
Create photo <img src="http://shutterstock.com" alt="free photo source">
Create link <a href="http://www.google.com" target="_blank"> key word for link</a>



<!--

h = heading
p = paragraph
<!-- and end with a --> = comments that make code inactive, for other developers without affecting output

ref: https://learn.freecodecamp.org/responsive-web-design/basic-html-and-html5/uncomment-html

-->


<!-- External Link

<h2>CatPhotoApp</h2>


<main>
  
  

<a href="http://freecatphotoapp.com" target="_blank">cat photos</a>
  
  

<img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
  
  

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  
<p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
  <p>Meowwww loved it, hated it, loved it, hated it yet spill litter box, scratch at owner, destroy all furniture, especially couch or lay on arms while you're using the keyboard. Missing until dinner time toy mouse squeak roll over. With tail in the air lounge in doorway. Man running from cops stops to pet cats, goes to jail.</p>
  
<p>Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to internet for chasing red dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on owners clothes or favor packaging over toy so purr for no reason. Meow to be let out play time intently sniff hand run outside as soon as door open yet destroy couch.</p>
  


</main>
  


<footer>Copyright Cat Photo App</footer>


Remarks: target="_blank" is an anchor's attribute to open a new window tab.
<a href="http://www.asdfjk.com"blah blah" target="_blank">explaination</a>

-->


<!-- Internal Link (advance footer)

<h2>CatPhotoApp</h2>


<main>
  
  

<a href="#footer">jump to bottom</a>
  

<img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
  
  

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  
<p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
  <p>Meowwww loved it, hated it, loved it, hated it yet spill litter box, scratch at owner, destroy all furniture, especially couch or lay on arms while you're using the keyboard. Missing until dinner time toy mouse squeak roll over. With tail in the air lounge in doorway. Man running from cops stops to pet cats, goes to jail.</p>
  
<p>Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to internet for chasing red dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on owners clothes or favor packaging over toy so purr for no reason. Meow to be let out play time intently sniff hand run outside as soon as door open yet destroy couch.</p>
  


</main>
  

<footer id="footer">Copyright Cat Photo App</footer>

-->


<!-- Explanation of command
Let's break down the example:

Normal text is wrapped in the p element:
<p> Here's a ... for you to follow. </p>

Next is the anchor element <a> (which requires a closing tag </a>):
<a> ... </a>

target is an anchor tag attribute that specifies where to open the link and the value "_blank" specifies to open the link in a new tab

href is an anchor tag attribute that contains the URL address of the link:
<a href="http://freecodecamp.org"> ... </a>

The text, "link to freecodecamp.org", within the anchor element called anchor text, will display a link to click:
<a href=" ... ">link to freecodecamp.org</a>

-->

<!-- Deadlink
 <p>Click here to view more 
    
 <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a> </p>
-->

<!-- Required specific input to fill in the blank
<h2>CatPhotoApp</h2>

<main>
  
<p>Click here to view more <a href="#">cat photos</a>.</p> 
<a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  
  
<p>Things cats love:</p>
  
<ul>

<li>cat nip</li>
    
<li>laser pointers</li>
    
<li>lasagna</li>
  <
/ul>
  
<p>Top 3 things cats hate:</p>
  
<ol>
    
<li>flea treatment</li>
    
<li>thunder</li>
    
<li>other cats</li>
  
</ol>
  
<form action="/submit-cat-photo">
    
<input type="text" placeholder="cat photo URL" required>
    
<button type="submit">Submit</button>
  
</form>

</main>

-->

<!--
You can use radio buttons for questions where you want the user to only give you one answer out of multiple options.

Radio buttons are a type of input.

Each of your radio buttons can be nested within its own label element. By wrapping an input element inside of a label element it will automatically associate the radio button input with the label element surrounding it.

All related radio buttons should have the same name attribute to create a radio button group. By creating a radio group, selecting any single radio button will automatically deselect the other buttons within the same group ensuring only one answer is provided by the user.


Here's an example of a radio button:

<label> 
  <input type="radio" name="indoor-outdoor">Indoor 
</label>
It is considered best practice to set a for attribute on the label element, with a value that matches the value of the id attribute of the input element. This allows assistive technologies to create a linked relationship between the label and the child input element. For example:

<label for="indoor"> 
  <input id="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>

Add a pair of radio buttons to your form, each nested in its own label element. One should have the option of indoor and the other should have the option of outdoor. Both should share the name attribute of indoor-outdoor to create a radio group.
------------------------------------------------------
Could be Write a code:
  <form action="/submit-cat-photo">
    
<label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    
<label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    
<input type="text" placeholder="cat photo URL" required>
    
<button type="submit">Submit</button>
  
</form>
-->

<!--
Forms commonly use checkboxes for questions that may have more than one answer.

Checkboxes are a type of input

Each of your checkboxes can be nested within its own label element. By wrapping an input element inside of a label element it will automatically associate the checkbox input with the label element surrounding it.

All related checkbox inputs should have the same name attribute.

It is considered best practice to explicitly define the relationship between a checkbox input and its corresponding label by setting the for attribute on the label element to match the id attribute of the associated input element.

Here's an example of a checkbox:

<label for="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>
----------------------------
Could be write a code: "The Structure is <label><input type="" name=""> attribute</label>

<form action="/submit-cat-photo">
    
<label><input type="radio" name="indoor-outdoor"> Indoor</label>
    
<label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    

<label><input type="checkbox" name="personality"> Loving</label>
    
<label><input type="checkbox" name="personality"> Lazy</label>
    
<label><input type="checkbox" name="personality"> Energetic</label><br>
    

<input type="text" placeholder="cat photo URL" required>
    

<button type="submit">Submit</button>
  
</form>

</main>
-->

<!--
Default
You can set a checkbox or radio button to be checked by default using the checked attribute.

To do this, just add the word "checked" to the inside of an input element. For example:

<input type="radio" name="test-name" checked>
-------------------------------------------
Could write a code:
 <form action="/submit-cat-photo">
    
<label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
<label><input type="checkbox" name="personality" checked> Loving</label>
 <input type="text" placeholder="cat photo URL" required>
    
<button type="submit">Submit</button>
  
</form>
</main>
-->

<!--
When in the onclick attribute you do not need to specify that it is Javascript.

<button type="button" 
        onclick="window.open('', '_self', ''); window.close();">Discard</button>
-->
