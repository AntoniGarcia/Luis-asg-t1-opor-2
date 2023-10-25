function ejercico3(lado1, lado2, lado3) {

    s = (lado1 + lado2 + lado3) / 2;

    area = Math.sqrt(s * (s - lado1) * (s - lado2) * (s - lado3))

    return area.toFixed(2)
}
