import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";

let state = 
  {
    postsData:
    [
      {id: 1, message: 'Hi, how are you', likescount: 5},
      {id: 2, message: 'Its my first post', likescount: 10},
    ]
  }

it('Length of posts should be incremented', () => {
  let action = addPostActionCreator('votTakoiVotText')
  let newState = profileReducer(state, action)
  expect(newState.postsData.length).toBe(3)
});

it('after deleting legth of messages should be decrement', () => {
  let action = deletePost(1)
  let newState = profileReducer(state, action)
  expect(newState.postsData.length).toBe(1)
});
it(`after deleting legth shouldn't be decrement if id is incorrect`, () => {
  let action = deletePost(1000)
  let newState = profileReducer(state, action)
  expect(newState.postsData.length).toBe(2)
});
