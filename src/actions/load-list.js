export const getList = (result) => ({type: 'GET_LIST', list: result});

export const loadList = () => {
    return dispatch => {
        let promise = new Promise((resolve)=> {
            setTimeout(() => {
                resolve([
                    {
                        name: 'Уточка',
                        desc: 'Есть две вещи, которые вам необходимо знать для написания вашего собственного виртуального DOM.'
                    },
                    {
                        name: 'Duck',
                        desc: 'You may specify this function to select a slice of the state based on props, or to bind action creators to a particular variable from props.'
                    },
                    {
                        name: 'McDuck',
                        desc: 'dgdsg sdgdsgsdg sdgsdg sdgsdgsdg sdgsdgs gsg sg sdgsg'
                    },
                    {
                        name: 'Уточка',
                        desc: 'Есть две вещи, которые вам необходимо знать для написания вашего собственного виртуального DOM.'
                    },
                    {
                        name: 'Duck',
                        desc: 'You may specify this function to select a slice of the state based on props, or to bind action creators to a particular variable from props.'
                    },
                    {
                        name: 'McDuck',
                        desc: 'dgdsg sdgdsgsdg sdgsdg sdgsdgsdg sdgsdgs gsg sg sdgsg'
                    }
                ])
            }, 1000)
        });

        promise.then(result => {
            dispatch(getList(result))
        })
    }
}