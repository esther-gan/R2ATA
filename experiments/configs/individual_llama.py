import os

os.sys.path.append("..")
from configs.template import get_config as default_config

def get_config():
    
    config = default_config()

    config.result_prefix = 'results/llama3/'

    config.tokenizer_paths=["/mnt/workspace/workgroup/workgroup_v100/yiran/llama2-chat"]
    config.model_paths=["/mnt/workspace/workgroup/workgroup_v100/yiran/llama2-chat"]
    config.conversation_templates=['llama-3']

    return config