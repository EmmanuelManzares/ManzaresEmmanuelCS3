function geneticCoding() {
    let mRNA = prompt("Enter mRNA sequence", "");
    let arr = [];
    let aminoAcids = [];
    for (let i = 0; i < mRNA.length - 2; i++) {
        let codon = mRNA.substring(i, i+3);
        if (codon == "AUG") {
            mRNA = mRNA.slice(i);
            break;
        }
    }
    for (let i = 0; i < mRNA.length - 2; i+=3) {
        let codon = mRNA.substring(i, i+3);
        if (codon == "UGA" || codon == "UAA" || codon == "UAG") {
            mRNA = mRNA.slice(0, i+3);
            break;
        }
    }
    for (let i = 0; i < mRNA.length - 2; i+=3) {
        let codon = mRNA.substring(i, i+3);
        let aminoAcid;

        if (codon == "AUG") {
            aminoAcid = "Met";
        } else if (codon == "UGA" || codon == "UAA" || codon == "UAG") {
            aminoAcid = "STOP";
        } else if (codon == "UUA" || codon == "UUG" || codon == "CUU" || codon == "CUC" || codon == "CUA" || codon == "CUG") {
            aminoAcid = "Leu";
        } else if (codon == "CGU" || codon == "CGC" || codon == "CGA" || codon == "CGG" || codon == "AGA" || codon == "AGG") {
            aminoAcid = "Arg";
        } else if (codon == "UCU" || codon == "UCC" || codon == "UCA" || codon == "UCG" || codon == "AGU" || codon == "AGC") {
            aminoAcid = "Ser";
        } else if (codon == "GGU" || codon == "GGC" || codon == "GGA" || codon == "GGG") {
            aminoAcid = "Gly";
        } else if (codon == "GUU" || codon == "GUC" || codon == "GUA" || codon == "GUG") {
            aminoAcid = "Val";
        } else if (codon == "CCU" || codon == "CCC" || codon == "CCA" || codon == "CCG") {
            aminoAcid = "Pro";
        } else if (codon == "ACU" || codon == "ACC" || codon == "ACA" || codon == "ACG") {
            aminoAcid = "Thr";
        } else if (codon == "GCU" || codon == "GCC" || codon == "GCA" || codon == "GCG") {
            aminoAcid = "Ala";
        } else if (codon == "AUU" || codon == "AUC" || codon == "AUA") {
            aminoAcid = "Ile";
        } else if (codon == "UUU" || codon == "UUC") {
            aminoAcid = "Phe";
        } else if (codon == "UAU" || codon == "UAC") {
            aminoAcid = "Tyr";
        } else if (codon == "CAU" || codon == "CAC") {
            aminoAcid = "His";
        } else if (codon == "CAA" || codon == "CAG") {
            aminoAcid = "Gln";
        } else if (codon == "AAU" || codon == "AAC") {
            aminoAcid = "Asn";
        } else if (codon == "AAA" || codon == "AAG") {
            aminoAcid = "Lys";
        } else if (codon == "GAU" || codon == "GAC") {
            aminoAcid = "Asp";
        } else if (codon == "GAA" || codon == "GAG") {
            aminoAcid = "Glu";
        } else if (codon == "UGU" || codon == "UGC") {
            aminoAcid = "Cys";
        } else if (codon == "UGG") {
            aminoAcid = "Trp";
        }

        arr.push(codon);
        aminoAcids.push(aminoAcid);
    }
    document.write("\n <br> [" + arr.join(", ") + "]");
    for (let i = 0; i < arr.length; i++) {
        document.write("\n <br>" + arr[i] + " ---> " + aminoAcids[i]);
    }
}