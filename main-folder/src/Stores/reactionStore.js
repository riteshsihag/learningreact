import  { action, decorate, observable, reaction } from 'mobx'

class ReactionStore {
   course = {}
   coursedescription = ''
    CourseName = [
        {
            id: 1,
            courseName: "Mobx"
        },
        {
            id: 2,
            courseName: "ReactJs"
        },
        {
            id: 3,
            courseName: "JavaScript"
        },


    ]
    CourseDescription = [
        {
            id: 1,
            description: "Mobx"
        },
        {
            id: 2,
            description: "ReactJs"
        },
        {
            id: 3,
            description: "JavaScript"
        },


    ]

    selectValue=(value)=>{
     this.course = this.CourseName.find(item=>{
        return item.id=== Number(value)
    })
    this.coursedescription = this.CourseDescription.find(item=>{
        return item.id=== Number(value)
    })
    }

}
decorate(ReactionStore,{
 course:observable,
 selectValue:action.bound,
 coursedescription:observable
})
export default new ReactionStore()