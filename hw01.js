var studentscore;
var lettergrade; 

function hw01(studentscore){
if(studentscore >= 90)
{
    lettergrade = 'A';
}
else if(studentscore >= 80 && studentscore < 90)
{
    lettergrade = 'B';
}
else if(studentscore >= 60 && studentscore < 80)
{
    lettergrade = 'C';
}
else if(studentscore >= 40 && studentscore < 60)
{
    lettergrade = 'D';
}
else
{
    lettergrade = 'F';
}
let result_hw01 =`학생의 점수는 ${studentscore}점이고, 레터 그레이드는 ${lettergrade}입니다.`;
console.log(result_hw01);
return result_hw01
}
