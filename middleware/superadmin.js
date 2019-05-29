export default function ({ store, redirect }) {
    if (!store.state.user.isLogin) {
        return redirect('/login')
    } else {
        if (!store.state.user.userData.role.id === 52) {
            return redirect('/login')
        }
    }

}