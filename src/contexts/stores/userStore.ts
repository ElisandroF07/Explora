import {create}  from 'zustand'

type State = {
  firstName: string
  lastName: string
  pictureUrl: string
  email: string
  googleId: string
}
  
type Action = {
  updateFirstName: (firstName: State['firstName']) => void
  updateLastName: (lastName: State['lastName']) => void
  updatePictureUrl: (lastName: State['pictureUrl']) => void
  updateGoogleId: (lastName: State['googleId']) => void
  updateEmail: (lastName: State['email']) => void
}

const useUserStore = create<State & Action>((set) => ({
  firstName: "",
  lastName: "",
  pictureUrl: "",
  email: '',
  googleId: '',
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
  updatePictureUrl: (pictureUrl) => set(() => ({ pictureUrl: pictureUrl })),
  updateEmail: (email) => set(() => ({ email: email })),
  updateGoogleId: (googleId) => set(() => ({ googleId: googleId })),
}))


export default useUserStore