"use strict"

//Get a Book
export function getBooks(){
	return{

    type:"GET_BOOKS"
    
}
	}

//Post a Book
export function postBooks(book){
	return{

    type:"POST_BOOK",
    payload:book
}
	}


//Delete a Book
export function deleteBooks(_id){
	return{

	type:"DELETE_BOOK",
	payload:_id

	}
}
//Update a Book
export function updateBooks(book){
	return{
	type:"UPDATE_BOOK",
	payload:book
}
	}

