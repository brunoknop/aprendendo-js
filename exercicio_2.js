function constroiPiramide(tamanhoPiramide) {
    for (var quantidaDeColunas = 1; quantidaDeColunas <= tamanhoPiramide; quantidaDeColunas++) {
        for (var quantidadeDeLinhas = 0; quantidadeDeLinhas < quantidaDeColunas; quantidadeDeLinhas++) {
            document.write('*');   
        }
        document.write('<br>');
    }
    for (var quantidaDeColunas = tamanhoPiramide-1; quantidaDeColunas > 0; quantidaDeColunas=quantidaDeColunas-1) {
        for (var quantidadeDeLinhas = 0; quantidadeDeLinhas < quantidaDeColunas; quantidadeDeLinhas++) {
            document.write('*');   
        }
        document.write('<br>');
    }
}
constroiPiramide(5);