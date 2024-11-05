# Reasoning Robustness of LLMs to Adversarial Typographical Errors


## Table of Contents

- [Installation](#installation)
- [Models](#models)
- [Experiments](#experiments)

## Installation

Our codebase is adapted from the work of [Universal and Transferable Adversarial Attacks on Aligned Language Models](https://github.com/llm-attacks/llm-attacks). We need the newest version of FastChat `fschat==0.2.23` and please make sure to install this version. The `llm-attacks` package can be installed by running the following command at the root of this repository:

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

## Experiments 

The `experiments` folder contains code to reproduce our experimental results on GSM8K, BBH, and MMLU.

As a general guideline, please run the following code to run the script:

```bash
cd launch_scripts
bash cotrobust.sh mistral gsm8k 10 4 4 0
```

These are the following arguments (in order):
- model: Victim model ('mistral', 'gemma' or 'llama')
- test_set: Dataset to be edited ('gsm8k', 'bbh' or 'mmlu')
- n_train_data: Sampled number of each topic
- n_steps: Number of adversarial typographical edits on each question
- batch_size
- few_shot: Number of examples to be used in the prompt

Notice that all hyper-parameters in our experiments are handled by the `ml_collections` package [here](https://github.com/google/ml_collections). You can directly change those hyper-parameters at the place they are defined, e.g. `experiments/configs/individual_xxx.py`. However, a recommended way of passing different hyper-parameters -- for instance you would like to try another model -- is to do it in the launch script. Check out our launch scripts in `experiments/launch_scripts` for examples. For more information about `ml_collections`, please refer to their [repository](https://github.com/google/ml_collections).

