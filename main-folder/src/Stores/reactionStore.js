import  { action, decorate, observable, reaction } from 'mobx'

class ReactionStore {

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

}
decorate(ReactionStore,{
    
})
export default new ReactionStore()