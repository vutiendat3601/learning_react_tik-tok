let user = {
    name: 'Dat Vu',
    age: 22,
    getName: function getName() {
        const get = () => {
            return this.name;
        };
        return get();
    },
};

let datVu = { ...user, key:'hi' };
console.log(datVu);