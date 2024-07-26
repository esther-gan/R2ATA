import os

os.sys.path.append("..")
from configs.template import get_config as default_config

def get_config():
    
    config = default_config()

    config.result_prefix = 'results/individual_mistral'

    config.tokenizer_paths=["/mnt/workspace/workgroup/yiran/Mistral-7b-v0.2"]
    config.model_paths=["/mnt/workspace/workgroup/yiran/Mistral-7b-v0.2"]
    config.conversation_templates=['mistral']

    return config