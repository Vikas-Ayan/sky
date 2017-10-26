const infdata={
    Name:"Vikas Singh",
    Age:21,
    Address:{
        H_No:192,
        Street:["Near Dr. Ranjan Clinic","Mahoddipur"],
        City: "Siwan",
        State:"Bihar",
        Country:"India",
        Pincode:"841226",
        },
    Qualification:{
        Graduation:{
            Course:"B.Tech",
            Stream:"Computer Science Engineering",
            Institute:"Lovely Professional University",
            Year_of_Completion:2018,
            Cgpa:8.5,
        },
       Intermediate:{
            Institute:"CSKM Public School",
            Year_of_Completion:2013,
            Percentage:"91.6",
            },
        Matriculate:{
            Institute:"DAV Public School",
            Year_of_Completion:2011,
            Cgpa:"10",
            },
        },
    Skills:["C", "Java","MYSQL","HTML","CSS"],
     
     Projects:[
            {
                Project_Name:"Billing_System",
                Languages:["Java","Android","SQL"],
                Platform:"Android",
             }, 
            {    
                Project_Name:"Employee_Management_System",
                Languages:["Java","SQL"],
                Platform:"Java",
             },
            ],
        Hobbies:["Singing","Playing Cricket","Travelling"],
        
        Achievements:[
            "Participated in YV Cricket Championship organized by Lovely Professional University, 2016.",
            "Awarded 3rd Prize with Distinction Certificate in 11th at CSKM Public School, 2011.",
            "Awarded 1st prize in Light Vocal Competition in Youth Festival Sitamarhi, 2008.",
            ],
        
        }
        console.log(infdata);
        console.log(JSON.stringify(infdata));
            

            
        
        
