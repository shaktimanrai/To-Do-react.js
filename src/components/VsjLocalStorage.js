import React, { useState } from 'react';

const VsjLocalStorage = () => {
   

   const [rollno, setRollno] = useState('');
   const [studentname, setStudentname] = useState('');
   const [collegename, setCollegename] = useState('');

   const handle = () => {
      localStorage.setItem('Rollno', rollno);
      localStorage.setItem('StudentName', studentname);
      localStorage.setItem('CollegeName', collegename);
   };
   const remove = () => {
      localStorage.removeItem('Rollno');
      localStorage.removeItem('StudentName');
      localStorage.removeItem('CollegeName');
   };
   return (
<div>


      <div className="contener">
         
         <label><h4>ROLLNO:</h4>
         <input className='C' placeholder="Rollno" value={rollno} onChange={(e) => setRollno(e.target.value)} />
         </label>
        
       <label><h4>StudentName:</h4> 
         <input placeholder="StudentName" value={studentname} onChange={(e) => setStudentname(e.target.value)}/>
         </label> 
        <label><h4>CollegeName:</h4>
         <input placeholder="CollegeName"value={collegename}onChange={(e) => setCollegename(e.target.value)}/>
         
         </label> 
         
         <div>
        
            <button onClick={handle}>Done</button>
         </div>

        
         {localStorage.getItem('Rollno') && (
            
            <div>
                
                Rollno: <tr><th><p>{localStorage.getItem('Rollno')}</p></th></tr>
                
            </div>
            
           
         )}
      


         {localStorage.getItem('StudentName') && (
            
            <div>

               StudentName:<tr><th><p>{localStorage.getItem('StudentName')}</p></th></tr>
            </div>
           
         )}
          

          {localStorage.getItem('CollegeName') && (
            <div>

              CollegeName:<tr><th><p>{localStorage.getItem('CollegeName')}</p></th></tr>
            </div>
         )}
         
         <div >
        <button className='R' onClick={remove}>Remove</button>
         </div>
         
        
      </div>
      </div>
      
   );
   
};
export default VsjLocalStorage;