import React from 'react';
import create from 'zustand';

export const useStore = create(set => ({
    onBoarding: true,
    finishBoarding: () => set( state => ({ onBoarding: false })),
    currentUser: {
        id: '',
        name: '',
        city: ''
    }
}
))