import { Component } from '@angular/core';

@Component({
  selector: 'app-medicamento-imagem',
  templateUrl: './medicamento-imagem.component.html',
  styleUrls: ['./medicamento-imagem.component.css']
})
export class MedicamentoImagemComponent {
  imageURL: string | ArrayBuffer | null = null; // Para armazenar o caminho da imagem
  selectedFile: File | null = null; // Para armazenar o arquivo selecionado

  // Dispara o seletor de arquivos ao clicar na área de upload
  triggerFileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  // Lê o arquivo selecionado e exibe a imagem
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
      const reader = new FileReader();
      
      // Após a leitura do arquivo, exibe a imagem
      reader.onload = () => {
        this.imageURL = reader.result;
      };
      reader.readAsDataURL(this.selectedFile); // Lê o arquivo como URL para exibição
    }
  }

  // Simula o upload da foto (aqui você pode implementar sua lógica de backend)
  uploadPhoto() {
    if (this.selectedFile) {
      console.log('Carregando a foto:', this.selectedFile);
      // Aqui, você pode adicionar a lógica para enviar a imagem ao backend
    } else {
      console.log('Nenhuma foto selecionada.');
    }
  }
}
