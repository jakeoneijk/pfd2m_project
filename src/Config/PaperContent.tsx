export const paperContent = {
  title:
    'PF-D2M: A Pose-free Diffusion Model for Universal Dance-to-Music Generation',
  paperInfo: '',
    //'Proceedings of the IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2025',
  author: 'Jaekwon Im¹, Natalia Polouliakh², Taketo Akama²',
  affiliation:[
    '¹ Graduate School of Culture Technology, KAIST, South Korea',
    '² Sony Computer Science Laboratories, Japan'
  ],
  abstract:
    'Versatile audio super-resolution (SR) aims to predict high-frequency components from low-resolution audio across diverse domains such as speech, music, and sound effects. Existing diffusion-based SR methods often fail to produce semantically aligned outputs and struggle with consistent high-frequency reconstruction. In this paper, we propose SAGA-SR, a versatile audio SR model that combines semantic and acoustic guidance. Based on a DiT backbone trained with a flow matching objective, SAGA-SR is conditioned on text and spectral roll-off embeddings. Due to the effective guidance provided by its conditioning, SAGA-SR robustly upsamples audio from arbitrary input sampling rates between 4 kHz and 32 kHz to 44.1 kHz. Both objective and subjective evaluations show that SAGA-SR achieves state-of-the-art performance across all test cases.',
  reference: [
    'H. Liu, K. Chen, Q. Tian, W. Wang, and M. D. Plumbley, “Audiosr: Versatile audio super-resolution at scale,” in ICASSP, pp. 1076–1080, IEEE, 2024.',
    'J. Im and J. Nam, “Flashsr: One-step versatile audio super-resolution via diffusion distillation,” in ICASSP. IEEE, 2025, pp. 1–5',
    
  ],
  contactLink: 'https://jakeoneijk.github.io/',
  paperLink: '',
  codeLink: ''
}
