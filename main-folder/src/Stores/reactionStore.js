import  { action, decorate, observable } from 'mobx'

class ReactionStore {
   course = {}
   coursedescription =  {}
   dropDownValue = 1
    CourseName = [
        {
            id: 1,
            courseName: "Name-Mobx"
        },
        {
            id: 2,
            courseName: "Name-ReactJs"
        },
        {
            id: 3,
            courseName: "Name-JavaScript"
        },


    ]
    CourseDescription = [
        {
            id: 1,
            description: "Description-Mobx"
        },
        {
            id: 2,
            description: "Description-ReactJs"
        },
        {
            id: 3,
            description: "Description-JavaScript"
        },


    ]

    selectValue=(dropDownValue)=>{
     this.course = this.CourseName.find(item=>{
        return item.id=== Number(dropDownValue)
    })
    this.coursedescription = this.CourseDescription.find(item=>{
        return item.id=== Number(dropDownValue)
    })
    }
   changeDropDownValue=(value)=>{
     this.dropDownValue = value
   }
}
decorate(ReactionStore,{
 course:observable,
 selectValue:action,
 coursedescription:observable,
 dropDownValue:observable
})
export default new ReactionStore()