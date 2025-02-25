function evenSizedString(str){
    const size = str.length;
    if (size %2 == 0){
        console.log('even size');
        return true;
    }else{
        console.log('odd size');
        return false;
    }
}

evenSizedString('Pilkhana Tragedy');