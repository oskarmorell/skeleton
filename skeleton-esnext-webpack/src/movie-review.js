export class moviereview{
    ratings = [
        {id:0, name:'1'},
        {id:1, name:'2'},
        {id:2, name:'3'},
        {id:3, name:'4'},
        {id:4, name:'5'}
    ]

    selectedRatingId = null;
    formsubmited(event){
        event.preventDefault();
        alert(this.selectedRating.name);
    }
}