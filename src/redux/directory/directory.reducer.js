const INITIAL_STATE = {
    sections: [{
        title: 'hats',
        imageUrl: 'https://i.ibb.co/xDvMrsr/ap-panthers-patriots-football.jpg',
        id: 1,
        linkUrl: 'shop/hats'
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/vDhYYqS/brady-image-4.jpg',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/c1fFNDC/tb12.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      }]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
            return state;
    }
};

export default directoryReducer;