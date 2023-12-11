import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Type Script Array';

// Two Type of Declaration 
//With Element Type
MostSpokenLangs_elementtype: string[] = [' Mandarin Chinese','English','Hindustani ', 'Spanish','Arabic','Malay','Russian','Bengali','Portuguese','French'];
//generic Type       Index               0                1        2             3          4       5       6          7         8           9
MostSpokenLangs: Array<string> = [' Mandarin Chinese','English','Hindustani ', 'Spanish','Arabic','Malay','Russian','Bengali','Portuguese','French'];
concatarray: string[] =[];
myarrayoutput: arrayoutput = new arrayoutput();





// len
lengthof() { 
  this.myarrayoutput.lengthof=  ('length of  MostSpokenLangs is :  ' +  this.MostSpokenLangs.length ) ;
}

ElementAccess() {
    this.myarrayoutput.ElementAccess = ('MostSpokenLangs element at index 5 is : ' +  this.MostSpokenLangs[5]) ;
    console.log("vaatame tervikut", this.myarrayoutput);

  }

foreachaccess() {
  this.myarrayoutput.foreachaccess ='';
  this.MostSpokenLangs.forEach(el => {
    this.myarrayoutput.foreachaccess=  this.myarrayoutput.foreachaccess + el + ',';
  });
}
forloop() {
 this.myarrayoutput.forloop =''
 for(var arrindex =0;arrindex < this.MostSpokenLangs.length;arrindex ++) {
   this.myarrayoutput.forloop=  this.myarrayoutput.forloop + this.MostSpokenLangs[arrindex] + ',';
 }
}

// Combines two or more arrays.
 arrayconcat() {
   this.concatarray =[];
   this.concatarray = this.concatarray.concat(this.MostSpokenLangs);
   this.concatarray = this.concatarray.concat(this.MostSpokenLangs_elementtype);
   this.myarrayoutput.arrayconcat=  ('length of the new array is : ' + this.concatarray.length );
}


join() {
this.myarrayoutput.join=  ('Join Returns : ' + this.MostSpokenLangs.join(','));
}

Simplefilter() {
 let Simplefilter = [];
 Simplefilter = this.MostSpokenLangs.filter((MostSpokenLang: string) =>  MostSpokenLang !=  '' );
 this.myarrayoutput.Simplefilter=  ('length of the Simplefilter is : ' + Simplefilter.length );

}

// Returns the index of the first occurrence of a value in an array.
indexOf() {
  this.myarrayoutput.indexOf ='';
  const indexvalue =0 ;
   this.myarrayoutput.indexOf = 'Index of Spanish is : '+  this.MostSpokenLangs.indexOf('Spanish',0);
}
// Returns the index of the last occurrence of a specified value in an array.
LastindexOf() {
  let myMostSpokenLangs_elementtype: string[] = ['Spanish','Spanish','Spanish','Spanish',];
  this.myarrayoutput.indexOf ='';
  const indexvalue =0 ;
  this.myarrayoutput.LastindexOf = 'last occurrence index of Spanish is : '+  myMostSpokenLangs_elementtype.lastIndexOf('Spanish', -1);
}
//Returns a string representation of an array.
toStrings() {
  let myMostSpokenLangs_elementtype: string[] = ['Spanish','Spanish','Spanish','Spanish','English'];
  this.myarrayoutput.toStrings = 'toString is : ' + myMostSpokenLangs_elementtype.toString();
}
//Returns a string representation of an array. The elements are converted to string using their toLocalString methods.
toLocaleStrings() {
  let myMostSpokenLangs_elementtype: string[] = ['Spanish','Spanish','Spanish','Spanish','English'];
  this.myarrayoutput.toLocaleStrings = 'toLocaleString is : ' + myMostSpokenLangs_elementtype.toLocaleString();
}


 popelements: string[] = ['Spanish 1','Spanish 2','Spanish 3','Spanish 4','English'];
  //Removes the last element from an array and returns it.
 pop() {
   try {
    let removedelem =  this.popelements.pop();

    if (removedelem) {
      this.myarrayoutput.pop = 'pop is : ' + removedelem.toString();
    }else {
      this.myarrayoutput.pop = 'pop is : undefined ' 
    }
   }catch(e) {
     console.log(e);
      this.myarrayoutput.pop = 'pop error is : ' + e;
   }
 }
pushelements: string[] = ['Spanish 1','Spanish 2','Spanish 3','Spanish 4'];
// Appends new elements to an array, and returns the new length of the array.
 push() {
  this.myarrayoutput.push = 'Before Push length is : '  +  this.pushelements.length
  let element ='Spanish ' + this.pushelements.length;
  this.pushelements.push(element);
  this.myarrayoutput.push += 'After Push length is : '  +  this.pushelements.length
  }

  reverseelements: string[] = ['Spanish 1','Spanish 2','Spanish 3','Spanish 4'];
//  Reverses the elements in an Array.
 reverse() {
   this.myarrayoutput.reverse = '';

  this.myarrayoutput.reverse = 'Before reverse elements   : '  +  this.reverseelements.toString();
  this.reverseelements.reverse();
  this.myarrayoutput.reverse += 'After reverse elements   : '  +   this.reverseelements.toString();
 }


//Removes the first element from an array and returns it.
shiftelements: string[] = ['Spanish 1','Spanish 2','Spanish 3','Spanish 4'];
 shift() {
 this.myarrayoutput.shift = '';

  this.myarrayoutput.shift = 'Before shift elements   : '  +  this.shiftelements.toString();
  this.shiftelements.shift();
  this.myarrayoutput.shift += 'After shift elements   : '  +   this.shiftelements.toString();
 }

//Removes the first element from an array and returns it.
sliceelements: string[] = ['Spanish 0','Spanish 1','Spanish 2','Spanish 3','Spanish 4','Spanish 5'];

 slice() {

let slicedarray = this.sliceelements.slice(1,3);
console.log(slicedarray);
 this.myarrayoutput.slice = '';
 this.myarrayoutput.slice = 'slice( from Index: 1,to Index :3) is   : '  +  slicedarray.toString();
}

//Sorts an array.
sortelements: string[] = ['A Spanish 0','B Spanish 1','C Spanish 2','D Spanish 3','E Spanish 4','F Spanish 5'];
sort() {
 this.myarrayoutput.sort = 'Before sort elements   : '  +  this.sortelements.toString();
  let sortdelements = this.sortelements.sort((a1, a2) => {
    return 1;
  });
  console.log(sortdelements);
  this.myarrayoutput.sort += 'After shift elements   : '  +   sortdelements.toString();
}



spliceelements: string[] = ['A Spanish 0','B Spanish 1','C Spanish 2','D Spanish 3','E Spanish 4','F Spanish 5'];
//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

splicedelete() {

this.myarrayoutput.splicedelete = ''
  this.myarrayoutput.splicedelete = 'Before splice delete length : '  +  this.spliceelements.length;
  this.spliceelements.splice(0,1);
  this.myarrayoutput.splicedelete += ' after splice delete (start: 0,deleteCount: 1) length : '  +  this.spliceelements.length;
  this.myarrayoutput.splicedelete += ' , elements  : '  +  this.spliceelements.toString();
}



spliceinsertelements: string[] = ['A Spanish 0','B Spanish 1','C Spanish 2','D Spanish 3','E Spanish 4','F Spanish 5'];
//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
splicedeleteinsertclickcount: number =0;


//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// deleteCount The number of elements to remove.
//items Elements to insert into the array in place of the deleted elements

splicedeleteinsert() {

this.splicedeleteinsertclickcount += 1;

this.myarrayoutput.splicedeleteinsert = ''
  this.myarrayoutput.splicedeleteinsert = 'Before splice delete length : '  +  this.spliceinsertelements.length;
  let insertelement1: string  = 'Spanish ' + this.splicedeleteinsertclickcount
  this.spliceinsertelements.splice(0,1, insertelement1);
  this.myarrayoutput.splicedeleteinsert += ' after splice delete (start: 0,deleteCount: 1) length : '  +  this.spliceinsertelements.length;
  this.myarrayoutput.splicedeleteinsert += ' , elements  : '  +  this.spliceinsertelements.toString();
}


shiftcallcount: number =0;
unshiftelements: string[] = ['A Spanish 0','B Spanish 1','C Spanish 2','D Spanish 3','E Spanish 4','F Spanish 5'];
// Inserts new elements at the start of an array.
unshift() {
  this.shiftcallcount +=1;
  let insertelement1: string  = 'Spanish unshift ' + this.shiftcallcount;

  this.myarrayoutput.unshift = 'Before unshift length is : '  +  this.unshiftelements.length
  this.unshiftelements.unshift(insertelement1);
  this.myarrayoutput.unshift += ' After unshift length is : '  +  this.unshiftelements.length
  this.myarrayoutput.unshift += ' Elements  : '  +  this.unshiftelements.toString();


}

//Determines whether all the members of an array satisfy the specified test.
everyelements: string[] = ['A Spanish 0','B Spanish 1','C Spanish 2','D Spanish 3','E Spanish 4','Spanish'];
every() {
  this.myarrayoutput.every = '';

   let aftercall =  this.everyelements.every((eve: string) => {
     this.myarrayoutput.every +=eve + ',';
     if ( eve === 'A Spanish 0') {
      return true;
     }else if ( eve === 'B Spanish 1') {
      return true;
     }else {
       return false;
     }
    })
     this.myarrayoutput.every += 'after every test fail value is : '  +  aftercall;

}
//Determines whether the specified callback function returns true for any element of an array.
someelements: string[] = ['A Spanish 0','B Spanish 1','C Spanish 2','D Spanish 3','E Spanish 4','Spanish', 'Spanish End Check'];
some() { 
  this.myarrayoutput.some = '';
  this.someelements.some((ele: string) => {
    
    if ( ele === 'Spanish'){
      this.myarrayoutput.some += ele + ' = true ,'
      return true;
    }else  {
      this.myarrayoutput.some += ele + ' = false ,'
      return false;}

    
  })
}

mapclickcount: number =0;
mapelements: string[] = ['A Spanish 0','B Spanish 1','C Spanish 2','D Spanish 3','E Spanish 4','Spanish'];
// Calls a defined callback function on each element of an array, and returns an array that contains the results.
map() {
  this.mapclickcount += 1;
  this.myarrayoutput.map  = '';
  this.myarrayoutput.map  = 'Before map length is : '  +  this.mapelements.toString();
  this.mapelements = this.mapelements.map( ele => ele = ele +  '  Change  ' + this.mapclickcount.toString());
  this.myarrayoutput.map  += 'after  map length is : '  +  this.mapelements.toString();
   this.myarrayoutput.map  += ', length is : '  +  this.mapelements.length;
}

//Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
reduceelements: string[] = ['A0','B1','C2','D3','E4','F6'];
reduce() { 
   
   this.myarrayoutput.reduce  = '';
   this.myarrayoutput.reduce  = 'Before ' + this.reduceelements.toString() ;
  let reducecall=  this.reduceelements.reduce((ele: string, ele1: string ) => {
     return  ele +  ' ' + ele1 ;
   });
   this.myarrayoutput.reduce  += ', After ' + reducecall.toString() ;

}

reducenumberelements: number[] = [2,4,6,8,10];
reducenumber() { 
   
   this.myarrayoutput.reducenumber  = '';
   this.myarrayoutput.reducenumber  = 'Before ' + this.reducenumberelements.toString() ;
  let reducecall=  this.reducenumberelements.reduce((ele: number, ele1: number) => {
     return  ele + ele1;
   });
   this.myarrayoutput.reducenumber  += ', After ' + reducecall.toString() ;

}


reducerightelements: string[] = ['A0','B1','C2','D3','E4','F6'];

// Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

reduceright() {
  this.myarrayoutput.reduceright = '';
  this.myarrayoutput.reduceright ='Before reduceRight ' + this.reducerightelements.toString();
  let afterreduceright=  this.reducerightelements.reduceRight((ele1, ele2 ) => {return ele1+ele2;});
  this.myarrayoutput.reduceright += ' ,After reduceRight  ' + afterreduceright.toString();
  
}


}

export class arrayoutput { 
  lengthof: string;
  ElementAccess: string;
  foreachaccess: string;
  forloop: string;
  arrayconcat: string;
  join: string;
  Simplefilter: string;
  indexOf:  string;
  LastindexOf: string;
  toStrings: string;
  toLocaleStrings:string;
  pop:string;
  push: string;
  reverse: string;
  shift: string;
  slice: string;
  sort: string;
  splicedelete: string;
  splicedeleteinsert: string;
  unshift: string;
  every: string  ='';
  some: string ='';
  map:  string ='';
  reduce: string ='';
  reducenumber: string;
  reduceright: string ='';
}