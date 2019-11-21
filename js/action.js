class Action {
    alphabet = "abcdefghijklmnopqrstuvwxyz";
    text;

    constructor(str) {
        this.text = Array.from(str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase());
    }

    encrypt(find) {
        var char = this.alphabet.charAt(find+3);

        if (find > 22) {
            var reset = find + 3 - 26;
            char = this.alphabet.charAt(reset);
        }

        return char;
    }

    decrypt(find) {
        var char = this.alphabet.charAt(find-3);

        if (find < 3) {
            var reset = find - 3 + 26;
            char = this.alphabet.charAt(reset);
        }

        return char;
    }

    magic(action) {
        var result = [];
        var i = 0;

        for (i=0; i < this.text.length; i++) {
            if (this.text[i] == " "){
                result[i] = " ";
                continue;
            }

            if (this.text[i].match("[^a-z]")) {
                result[i] = this.text[i];
                continue;
            }

            var find = this.alphabet.search(this.text[i]);

            switch (action) {
                case "encrypt":
                    result[i] = this.encrypt(find);
                    break;
                case "decrypt":
                    result[i] = this.decrypt(find);
                    break;
            }

        }

        return result.join('');
    }
}
