# CoT Robustness


## Table of Contents

- [Installation](#installation)
- [Models](#models)

## Installation

We need the newest version of FastChat `fschat==0.2.23` and please make sure to install this version. The `llm-attacks` package can be installed by running the following command at the root of this repository:

```bash
pip install -e .
```

## Models

Please follow the instructions to download Vicuna-7B or/and LLaMA-2-7B-Chat first (we use the weights converted by HuggingFace [here](https://huggingface.co/meta-llama/Llama-2-7b-hf)).  Our script by default assumes models are stored in a root directory named as `/DIR`. To modify the paths to your models and tokenizers, please add the following lines in `experiments/configs/individual_xxx.py` (for individual experiment) and `experiments/configs/transfer_xxx.py` (for multiple behaviors or transfer experiment). An example is given as follows.

```python
    config.model_paths = [
        "/DIR/vicuna/vicuna-7b-v1.3",
        ... # more models
    ]
    config.tokenizer_paths = [
        "/DIR/vicuna/vicuna-7b-v1.3",
        ... # more tokenizers
    ]
```
