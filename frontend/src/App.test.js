<form>
       <label htmlFor="input1"><i>&nbsp;&nbsp;&nbsp;&nbsp;Input format should be "Serena Williams":</i></label><br />
       <label htmlFor="input1">Search for Athletes:</label>
       <input type="text" id="input1" name="input1" onChange={(e) => {
       setAthleteName1(e.target.value);
       } } />
       <button onClick={(e) => submitOne(e)}>Submit</button><br /><br />
       <label htmlFor="input2"><i>&nbsp;&nbsp;&nbsp;&nbsp;Input format should be "Aimee Boorman":</i></label><br />
       <label htmlFor="input2">Search for Coaches:</label>
       <input type="text" id="input2" name="input2" onChange={(e) => {
       setCoachName1(e.target.value);
       } } />
       <button onClick={(e) => submitTwo(e)}>Submit</button><br /><br />
       <label htmlFor="input3"><i>&nbsp;&nbsp;&nbsp;&nbsp;Input format should be "ATHLETE NAME : FUN FACT":</i></label><br />
       <label htmlFor="input3">Insert the fun fact:</label>
       <input type="text" id="input3" name="input3" onChange={(e) => {
       setAthleteName3(e.target.value);
       }}/>
       <input type="text" id="input1.5" name="input1.5" title="Please enter your full name" placeholder="John Doe" onChange={(e) => {
       setAthleteFact3(e.target.value);
       } } />
       <button onClick={(e) => submitThree(e)}>Submit</button><br /><br />
       <label htmlFor="input4"><i>&nbsp;&nbsp;&nbsp;&nbsp;Input format should be "ATHLETE NAME : FUN FACT":</i></label><br />
       <label htmlFor="input4">Update the fact:</label>
       <input type="text" id="input4" name="input4" onChange={(e) => {
       setAthleteName4(e.target.value);
       }}/>
       <input type="text" id="input4.5" name="input4.5" title="Please enter your full name" placeholder="John Doe" onChange={(e) => {
       setAthleteFact4(e.target.value);
       } } />
       <button onClick={(e) => submitFour(e)}>Submit</button><br /><br />
       <label htmlFor="input5"><i>&nbsp;&nbsp;&nbsp;&nbsp;Input format should be "Serena Williams":</i></label><br />
       <label htmlFor="input5">Delete the fact:</label>
       <input type="text" id="input5" name="input5" onChange={(e) => {
       setAthleteName5(e.target.value);
       } } />
       <button onClick={(e) => submitFive(e)}>Submit</button><br /><br />
       <div>
          <p>There are many countries whose coaches do not get recognition for contributing to a nation that wins medals in these competitive games. This advanced query uses INNER JOIN and a subquery. It finds all of the coaches and connects it to the medals table so the output is only a list of coaches whose athletes have won a gold medal. We also group by the discipline of the athlete and their respective coach’s name. </p>
          <button onClick={(e) => advancedQuery1(e)}>Advanced Queury 1</button>
       </div>
       <div>
          <p>For each athlete that didn’t win a medal, we want to display the athlete that won the gold medal for that discipline. </p>
          <button onClick={(e) => advancedQuery2(e)}>Advanced Queury 2</button>
       </div>
    </form>