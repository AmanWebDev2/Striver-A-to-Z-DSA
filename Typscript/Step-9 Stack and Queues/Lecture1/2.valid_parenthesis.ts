function isValid(s:string):boolean {
    let stack:string[] = [];
    for(let i=0; i<s.length; i++) {
        // only push open brackets in stack
        if(s[i]=='('||s[i]=='['||s[i]=='{'){
            stack.push(s[i]);
        }else{

            // stack does not have opening brackets
            if(stack.length==0) {
                return false;
            }

            // comparing open and closing bracket
            let top = stack.pop();
            if((top=='(' && s[i]==')') || (top=='[' && s[i]==']') || (top=='{' && s[i]=='}')){
                continue;
            }else{
                return false;
            }
        }
    }
    if(stack.length==0) {
        return true;
    }
    return false;
    
}